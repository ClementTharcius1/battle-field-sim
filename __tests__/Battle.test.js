import Army from "../models/Army.js";
import Battle from "../models/Battle.js";

describe("Battle evaluation", () => {
  it("should find a winning arrangement when possible", () => {
    const ownInput =
      "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
    const oppInput =
      "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

    const ownArmy = new Army(ownInput);
    const opponentArmy = new Army(oppInput);

    const result = Battle.determineMatchUp(
      ownArmy.platoons,
      opponentArmy.platoons
    );

    expect(result).not.toBeNull();
    expect(
      result.battleResults.filter((b) => b.result === "WIN").length
    ).toBeGreaterThanOrEqual(3);
  });

  it("should return null if no winning arrangement is possible", () => {
    const ownInput = "Militia#10;Militia#10;Militia#10;Militia#10;Militia#10";
    const oppInput =
      "HeavyCavalry#1000;HeavyCavalry#1000;HeavyCavalry#1000;HeavyCavalry#1000;HeavyCavalry#1000";

    const ownArmy = new Army(ownInput);
    const opponentArmy = new Army(oppInput);

    const result = Battle.determineMatchUp(
      ownArmy.platoons,
      opponentArmy.platoons
    );
    expect(result).toBeNull();
  });
});
