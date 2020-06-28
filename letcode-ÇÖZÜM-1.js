var combinationSum = function(
    candidates,
    target,
    index = 0,
    curr = [],
    combinations = []
  ) {
    if (target <= 0) {
      if (target === 0) {
        combinations.push(curr.slice());
      }
      return;
    }
    if (index < candidates.length) {
      let current = candidates[index];
      curr.push(current);
      combinationSum(candidates, target - current, index, curr, combinations);
      curr.pop();
      combinationSum(candidates, target, index + 1, curr, combinations);
    }
  
    return combinations;
  };
  
  combinationSum([2, 3, 6, 7], 7);