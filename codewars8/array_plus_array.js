function arrayPlusArray(arr1, arr2) {
  //return [...arr1, ...arr2].reduce((acc, cur) => acc + cur);
  //return arr1.concat(arr2).reduce((acc, cur) => acc + cur);

  /* Решение без использования reduce
  const numbers = [...arr1, ...arr2];
  let sum = 0;
  
  for(let i = 0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  
  return sum;
  */

  const numbers = [...arr1, ...arr2];
  const sum = [];
  
  for(let i = 0; i<numbers.length; i++){
    if(sum.length === 0) {
      sum.push(numbers[i])
    } else {
      sum[0] = sum[0]+numbers[i]
    }
  }
  
  return sum[0]
}
