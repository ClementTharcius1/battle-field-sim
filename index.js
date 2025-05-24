import Army from "./src/models/Army.js";
import Battle from "./src/models/Battle.js";

const myTroops =
  "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
const opponentTroops =
  "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

const ownArmy = new Army(myTroops);
const opponentArmy = new Army(opponentTroops);

const result = Battle.determineMatchUp(ownArmy.platoons, opponentArmy.platoons);

if (result) {
  const { arrangement, battleResults } = result;

  console.log("\nWinning Arrangement:");
  console.log(arrangement.map((p) => p.toString()).join(";"));

  console.log("\nBattle Summary and Results :");
  battleResults.forEach((battle, i) => {
    console.log(
      `Battle ${
        i + 1
      }: ${battle.own.toString()} vs ${battle.opponent.toString()} => ${
        battle.result
      }`
    );
  });
} else {
  console.error("No chance of winning the battle");
}
