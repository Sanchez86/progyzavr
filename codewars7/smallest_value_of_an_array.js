// Smallest value of an array

function min(arr, toReturn) {
//   const numbers = arr.slice();
//   const minValue = numbers.sort((a, b) => a-b)[0];
  
  const minValue = Math.min(...arr);  
  const indexMinValue = arr.indexOf(minValue);
  
  return toReturn === 'value' ? minValue : indexMinValue;
}
