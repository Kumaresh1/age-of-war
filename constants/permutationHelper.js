// Permutations code starts
const generatePermutations = (soldiers) => {
    const result = [];
    generatePermutationsHelper(soldiers, [], result);
    return result;
  };
  
  const generatePermutationsHelper = (soldiers, temp, result) => {
    if (soldiers.length === 0) {
      result.push([...temp]);
    } else {
      for (let i = 0; i < soldiers.length; i++) {
        const soldier = soldiers[i];
        temp.push(soldier);
        const remaining = soldiers.filter((_, index) => index !== i);
        generatePermutationsHelper(remaining, temp, result);
        temp.pop();
      }
    }
  };
  // Permutations code ends

  module.exports = { generatePermutationsHelper,generatePermutations };
