import Platoon from "./Platoon.js";

class Army {
  constructor(platoonData) {
    this.platoons = platoonData.split(";").map((data) => {
      const [type, count] = data.split("#");
      return new Platoon(type.trim(), count.trim());
    });
  }
}

export default Army;
