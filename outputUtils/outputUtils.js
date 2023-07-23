const printBattleStats = (battleStats) => {
    console.log(
      "\n\n\n********************************* BATTLE STATS *********************************"
    );
    console.log(
      "--------------------------------------------------------------------------------"
    );
    console.log("Battle\t\t\tOwn\t\t\tOpponent\t\tOutcome");
    console.log(
      "--------------------------------------------------------------------------------"
    );
    for (let i = 0; i < battleStats.length; i++) {
      const { battleNumber, own, opponent, result } = battleStats[i];
      console.log(
        battleNumber,
        "\t\t",
        own.type,
        "\t\t",
        opponent.type,
        "\t\t",
        result
      );
    }
  };

  module.exports= { printBattleStats }