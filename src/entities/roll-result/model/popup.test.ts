import { describe, it, expect } from "vitest";
import popupReducer from "./popup";

describe("popupReducer", () => {
  it("returns true on SHOW_POPUP", () => {
    expect(popupReducer(false, { type: "SHOW_POPUP" })).toBe(true);
  });

  it("returns false on HIDE_POPUP", () => {
    expect(popupReducer(true, { type: "HIDE_POPUP" })).toBe(false);
  });

  it("preserves the current state for an unknown action (bugreport.md #2 fix)", () => {
    expect(popupReducer(true, { type: "SOME_OTHER_ACTION" })).toBe(true);
    expect(popupReducer(false, { type: "SOME_OTHER_ACTION" })).toBe(false);
  });

  it("defaults to false when initialized with no state", () => {
    expect(popupReducer(undefined, { type: "@@INIT" })).toBe(false);
  });
});
