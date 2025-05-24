class Battle {
  static determineMatchUp(ownPlatoons, opponentPlatoons) {
    const permutations = Battle.permute(ownPlatoons);

    for (const permutation of permutations) {
      let wins = 0;
      const battleResults = [];

      for (let i = 0; i < 5; i++) {
        const own = permutation[i];
        const opponent = opponentPlatoons[i];
        const result = own.fight(opponent);
        battleResults.push({ own, opponent, result });
        if (result === "WIN") wins++;
      }

      if (wins >= 3) {
        return {
          arrangement: permutation,
          battleResults,
        };
      }
    }

    return null;
  }

  /**
   * Choice: Performs heap algorithm
   * Reason: It goes through all the permutations without repeating the combination.
   *  The problem has totally 5 combinations, which is 5! of 120 permutations
   */
  static permute(arr) {
    const result = [];
    const generatePermutation = (n, heapArr) => {
      if (n === 1) result.push([...heapArr]);
      else {
        generatePermutation(n - 1, heapArr);
        for (let i = 0; i < n - 1; i++) {
          const j = n % 2 === 0 ? i : 0;
          [heapArr[n - 1], heapArr[j]] = [heapArr[j], heapArr[n - 1]];
          generatePermutation(n - 1, heapArr);
        }
      }
    };
    generatePermutation(arr.length, [...arr]);
    return result;
  }
}

export default Battle;
