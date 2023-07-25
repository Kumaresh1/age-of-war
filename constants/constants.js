//Constants code starts
 const defaultSoldierTypes = [
    "Militia",
    "Spearmen",
    "FootArcher",
    "LightCavalry",
    "HeavyCavalry",
    "CavalryArcher",
  ];
  //Constants code ends

  const soldierAdvantages = {
    Militia: ["Spearmen", "LightCavalry"],
    Spearmen: ["LightCavalry", "HeavyCavalry"],
    LightCavalry: ["FootArcher", "CavalryArcher"],
    HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
    CavalryArcher: ["Spearmen", "HeavyCavalry"],
    FootArcher: ["Militia", "CavalryArcher"],
  };
  module.exports = { defaultSoldierTypes,soldierAdvantages };
