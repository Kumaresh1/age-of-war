const {generatePermutations} = require ('../constants/permutationHelper');


const findWinningArrangement = (
    ownSoldiers,
    opponentSoldiers,
    advantageConfig
  ) => {
    const permutations = generatePermutations(ownSoldiers);
  
    for (const arrangement of permutations) {
      var battleStats = [];
      let wins = 0;
      let draws = 0;
  
      for (let i = 0; i < 5; i++) {
        const opponentCount = opponentSoldiers[i].getCount();
        const hasAdvantage = hasAdvantageFunc(
          arrangement[i].constructor.name,
          opponentSoldiers[i].constructor.name,
          advantageConfig
        );
  
        const outcome = arrangement[i].getOutcome(opponentCount, hasAdvantage);
        if (outcome === 1) {
          wins++;
        } else if (outcome === 0) {
          draws++;
        }
  
        // Store battle stats
        const battleNumber = `Battle ${i + 1}`;
        const result = outcome === 1 ? "Win" : outcome === 0 ? "Draw" : "Loss";
        battleStats.push({
          battleNumber,
          own: arrangement[i],
          opponent: opponentSoldiers[i],
          result,
        });
      }
  
      if (wins >= 3) {
        return { winningArrangement: arrangement, battleStats };
      }
    }
  
    return { winningArrangement: null, battleStats };
  };

const hasAdvantageFunc = (ownClass, opponentClass, advantageConfig) => {
    const advantages = advantageConfig.getAdvantagesFor(ownClass);
    return advantages.includes(opponentClass);
};

module.exports=findWinningArrangement