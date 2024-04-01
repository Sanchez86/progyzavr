//

function min(arr, toReturn) {

  const minValue = Math.min(...arr);
  
//   const numbers = arr.slice();
//   const minValue = numbers.sort((a, b) => a-b)[0];
  
  
  const indexMinValue = arr.indexOf(minValue);
  
  return toReturn === 'value' ? minValue : indexMinValue;
