import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import dicesCountReducer from "../entities/dice/model/dicesCount";
import popupReducer from "../entities/roll-result/model/popup";
import popupContentReducer from "../entities/roll-result/model/poupContent";
import App from "./App";

const buildStore = () =>
  createStore(
    combineReducers({
      dices: dicesCountReducer,
      popup: popupReducer,
      popupContent: popupContentReducer,
    }),
  );

describe("App + Popup (regression tests for bugreport.md #3 — popup wired through Redux)", () => {
  it("keeps the popup hidden until a roll happens, then shows a result driven by the store", () => {
    const store = buildStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(store.getState().popup).toBe(false);

    fireEvent.click(screen.getByText("k6").closest("div")); // select 1d6
    fireEvent.click(screen.getByText("Roll"));

    expect(store.getState().popup).toBe(true);
    expect(screen.getByText("Result")).toBeInTheDocument();
  });

  it("hides the popup again on click, via the store (not local component state)", () => {
    const store = buildStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.click(screen.getByText("k6").closest("div"));
    fireEvent.click(screen.getByText("Roll"));
    expect(store.getState().popup).toBe(true);

    fireEvent.click(screen.getByText("Result"));
    expect(store.getState().popup).toBe(false);
  });
});
