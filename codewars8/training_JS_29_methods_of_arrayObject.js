function bigToSmall(arr) {
  function concatArrs(arr) {
    //проверки...
    return [].concat(...arr); 
  }
  function sortNumbers(numbers) {
    // проверки...
    return numbers.sort((a,b) => b-a);
  }
  function joinBySymbol(arr, symbol) {
    //проверки...
    return arr.join(symbol);
  }

//   return joinBySymbol(sortNumbers(concatArrs(arr)), '>');
  const concated = concatArrs(arr);
  const sorted = sortNumbers(concated);
  
  return joinBySymbol(sorted, '>');
}

// Просто решение в одну строку
//const numbers = [].concat(...arr).sort((a, b) => b-a ).join('>');

// Альтернатива [].concat(...arr)
//   const numbers = [];
  
//   arr.forEach(array => {
//     array.forEach(number => {
//       numbers.push(number)
//     })
//   })
