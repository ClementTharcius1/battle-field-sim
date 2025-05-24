import Config from "config";

const advantageMap = Config.get("advantageMap");

class Platoon {
  constructor(type, count) {
    this.type = type;
    this.count = parseInt(count, 10);
  }

  // Checks the advantage for my troops
  determineAdvantage(opponent) {
    return advantageMap[this.type]?.includes(opponent.type);
  }

  fight(opponent) {
    // determines the advantage
    const myMultiplier = this.determineAdvantage(opponent) ? 2 : 1;
    const opponentMultiplier = opponent.determineAdvantage(this) ? 2 : 1;

    // calculates the power
    const myPower = this.count * myMultiplier;
    const opponentPower = opponent.count * opponentMultiplier;

    if (myPower > opponentPower) return "WIN";
    if (myPower < opponentPower) return "LOSE";
    return "DRAW";
  }

  toString() {
    return `${this.type}#${this.count}`;
  }
}

export default Platoon;
