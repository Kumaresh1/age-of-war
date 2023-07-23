class AdvantageConfig {
    constructor() {
      this.advantageMap = new Map();
      this.advantageMap.set("Militia", ["Spearmen", "LightCavalry"]);
      this.advantageMap.set("Spearmen", ["LightCavalry", "HeavyCavalry"]);
      this.advantageMap.set("LightCavalry", ["FootArcher", "CavalryArcher"]);
      this.advantageMap.set("HeavyCavalry", [
        "Militia",
        "FootArcher",
        "LightCavalry",
      ]);
      this.advantageMap.set("CavalryArcher", ["Spearmen", "HeavyCavalry"]);
      this.advantageMap.set("FootArcher", ["Militia", "CavalryArcher"]);
    }
  
    setAdvantage(soldierType, advantages) {
      this.advantageMap.set(soldierType, advantages);
    }
  
    getAdvantagesFor(soldierType) {
      return this.advantageMap.get(soldierType) || [];
    }
  }
  
  module.exports = AdvantageConfig;
  