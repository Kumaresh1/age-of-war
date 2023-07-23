class DefaultBattleOutcomeStrategy {
    getOutcome(ownCount, opponentCount, hasAdvantage) {
      if (
        ownCount > opponentCount ||
        (hasAdvantage && ownCount * 2 >= opponentCount)
      ) {
        // For win
        return 1;
      } else if (ownCount === opponentCount) {
        // For Draw
        return 0;
      } else {
        // For Loss
        return -1;
      }
    }
  }

  module.exports = DefaultBattleOutcomeStrategy;
