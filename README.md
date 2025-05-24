# Battle Simulator

## Problem
Scenario:
You are a medieval king attacking your opponent at five locations simultaneously
Each location has a platoon - which has a number of soldiers of a specific class
You know the platoons your opponent has
Your job is to figure out which of your platoons should attack which of your opponent's platoons so that you can win majority of the battles.
In general, one soldier of your platoon will be able to handle one soldier of your opponent's platoon
If your platoon has 100 soldiers and your opponent's platoon has:
* 99 soldiers - You Win
* 100 soldiers - Draw
* 101 soldiers - You Lose

The soldiers who have advantage over the opponent, will be able to handle twice the amount of opponent's soldiers
If your platoon has 100 Spearmen and your opponent's platoon has:
* 199 HeavyCavalry - You Win
* 200 HeavyCavalry - Draw
* 201 HeavyCavalry - You Lose
The input to the problem statement is the list of platoons that you have with their classes and number of units in the first line
The second line contains the list of platoons of the opponent (PlatoonClasses#NoOfSoldiers)
Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120
Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100
The output of the program should be to give a sequence in which you should arrange your platoons so that you win atleast 3 of the 5 battles.
There could be multiple winning arrangements, it is enough to print one of the possible arrangements
If there is no possibility to get atleast 3 out of 5 wins in any arrangement, it should intimate that with an error message that "There is no chance of winning"

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/battle-simulator.git
cd battle-simulator
```

2. Install dependencies
```bash
npm install
```

3. Run the battle simulation:
```bash
npm start
```

4. Run unit tests with:
```bash
npm test
```

5. Configuration
This project uses the config package to manage advantage rules.
Advantage mappings are defined in config/default.json like:

```json
{
  "advantageMap": {
    "Militia": ["Spearmen", "LightCavalry"],
    "Spearmen": ["LightCavalry", "HeavyCavalry"],
    "LightCavalry": ["FootArcher", "CavalryArcher"],
    "HeavyCavalry": ["Militia", "FootArcher", "LightCavalry"],
    "CavalryArcher": ["Spearmen", "HeavyCavalry"],
    "FootArcher": ["Militia", "CavalryArcher"]
  }
}
```

## Project Structure
- index.js - Entry point running the battle simulation

- models/ - Contains classes for Platoon, Army, and Battle logic

- __tests__/ - Jest tests for Platoon and Battle evaluation

---
