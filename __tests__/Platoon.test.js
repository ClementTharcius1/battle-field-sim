import Platoon from "../models/Platoon.js";

describe("Platoon", () => {
  it("should recognize advantages correctly", () => {
    const militia = new Platoon("Militia", 10);
    const spearmen = new Platoon("Spearmen", 10);
    expect(militia.determineAdvantage(spearmen)).toBe(true);
  });

  it("should calculate battle outcome correctly with advantage", () => {
    const militia = new Platoon("Militia", 100);
    const spearmen = new Platoon("Spearmen", 190);
    expect(militia.fight(spearmen)).toBe("WIN");
  });

  it("should calculate battle outcome as DRAW without advantage", () => {
    const light = new Platoon("LightCavalry", 100);
    const opp = new Platoon("LightCavalry", 100);
    expect(light.fight(opp)).toBe("DRAW");
  });

  it("should return string representation correctly", () => {
    const p = new Platoon("FootArcher", 50);
    expect(p.toString()).toBe("FootArcher#50");
  });
});
