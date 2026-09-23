import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import dicesCountReducer from "../model/dicesCount";
import popupReducer from "@/entities/roll-result/model/popup";
import popupContentReducer from "@/entities/roll-result/model/poupContent";
import Dice from "./Dice";

const buildStore = () =>
  createStore(
    combineReducers({
      dices: dicesCountReducer,
      popup: popupReducer,
      popupContent: popupContentReducer,
    }),
  );

const renderDice = (store) =>
  render(
    <Provider store={store}>
      <Dice image={<svg data-testid="dice-image" />} title="6" />
    </Provider>,
  );

describe("Dice (regression tests for bugreport.md #1 and #4)", () => {
  it("does not mutate the previous dices state object when incrementing (bug #1)", () => {
    const store = buildStore();
    const stateBeforeClick = store.getState().dices;

    renderDice(store);
    fireEvent.click(screen.getByText("k6").closest("div"));

    const stateAfterClick = store.getState().dices;
    expect(stateAfterClick).not.toBe(stateBeforeClick);
    expect(stateBeforeClick["6"]).toBe(0); // the old reference must be untouched
    expect(stateAfterClick["6"]).toBe(1);
  });

  it("produces a new state object on every dispatch, so other slices/selectors see the update (bug #1)", () => {
    const store = buildStore();
    const container = () => screen.getByText("k6").closest("div");

    renderDice(store);
    const ref1 = store.getState().dices;
    fireEvent.click(container());
    const ref2 = store.getState().dices;
    fireEvent.click(container());
    const ref3 = store.getState().dices;

    expect(ref1).not.toBe(ref2);
    expect(ref2).not.toBe(ref3);
    expect(store.getState().dices["6"]).toBe(2);
  });

  it("never lets the count go below zero when clearing/decrementing (bug #4)", () => {
    const store = buildStore();
    renderDice(store);

    const diceContainer = screen.getByText("k6").closest("div");
    fireEvent.click(diceContainer); // count -> 1, reveals the "x"/"-" buttons

    fireEvent.click(screen.getByText("-"));
    expect(store.getState().dices["6"]).toBe(0);

    // at 0 the decrement/clear buttons are hidden again — there is no way
    // to click "-" past zero through the UI
    expect(screen.queryByText("-")).not.toBeInTheDocument();
  });

  it('resets the count to zero via the clear ("x") button', () => {
    const store = buildStore();
    renderDice(store);

    const diceContainer = screen.getByText("k6").closest("div");
    fireEvent.click(diceContainer);
    fireEvent.click(diceContainer);
    expect(store.getState().dices["6"]).toBe(2);

    fireEvent.click(screen.getByText("x"));
    expect(store.getState().dices["6"]).toBe(0);
  });
});
