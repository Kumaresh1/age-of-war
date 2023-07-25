// ****************************************** Import Starts ****************************************** \\
const { defaultSoldierTypes,soldierAdvantages } = require ('./constants/constants');
const DefaultBattleOutcomeStrategy = require('./class/defaultOutcomeStrategy');
const {findWinningArrangement,hasAdvantageFunc} = require('./algo/bruteForceAlgo');
const { printBattleStats } = require('./outputUtils/outputUtils')
const readline = require("readline");
// ****************************************** Import Ends ****************************************** \\

class Soldier {
  constructor(type, count) {
    this.type = type;
    this.count = count;
    this.battleOutcomeStrategy = new DefaultBattleOutcomeStrategy();
  }

  getCount() {
    return this.count;
  }
  getAdvantage() {
    if(soldierAdvantages[this.type]){
      return soldierAdvantages[this.type]
    }
    else return [] ;
  }

  getOutcome(opponentClass,opponentCount) {

    const hasAdvantage=hasAdvantageFunc(opponentClass,this.getAdvantage())
    return this.battleOutcomeStrategy.getOutcome(
      this.count,
      opponentCount,
      hasAdvantage
    );
  }
}

// Parsing code starts
const parsePlatoons = (platoons) => {
  const soldiers = [];
  const platoonList = platoons.split(";");

  for (const platoon of platoonList) {
    const [type, count] = platoon.split("#");
    try {
      soldiers.push(createSoldier(type, parseInt(count)));
    } catch (error) {
      console.log(error)
    }
  }

  return soldiers;
};
// Parsing code ends

const createSoldier = (type, count) => {
  if (defaultSoldierTypes.includes(type)) {
    return new Soldier(type, count);
  } else {
    throw new Error("Invalid soldier type: " + type);
  }
};

const printArrangement = (arrangement) => {
  const output = arrangement
    .map((soldier) => `${soldier.type}#${soldier.getCount()}`)
    .join(";");
  console.log(output);
};

const getOwnAndOpponentPlatoons = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    let ownPlatoons = "";
    let opponentPlatoons = "";

    rl.question("Enter own platoons: ", (ownInput) => {
      ownPlatoons = ownInput.trim();

      rl.question("Enter opponent platoons: ", (opponentInput) => {
        opponentPlatoons = opponentInput.trim();

        rl.close();

        resolve({ ownPlatoons, opponentPlatoons });
      });
    });
  });
};

(async () => {

  // Uncomment Line 104 and comment 105-108 to read input from user
  //const { ownPlatoons, opponentPlatoons } = await getOwnAndOpponentPlatoons();
  const ownPlatoons =
    "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120";
  const opponentPlatoons =
    "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

  const ownSoldiers = parsePlatoons(ownPlatoons);
  const opponentSoldiers = parsePlatoons(opponentPlatoons);

  const { winningArrangement, battleStats } = findWinningArrangement(
    ownSoldiers,
    opponentSoldiers,
  );

  if (winningArrangement) {
    printArrangement(winningArrangement);
    printBattleStats(battleStats);
  } else {
    console.log("Battle can't be won.");
  }
})();
