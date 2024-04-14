// The highest profit wins!

function minMax(arr){
  
  let min = arr[0];
  let max = arr[0];
  
  for(let i = 0; i<=arr.length; i++) {
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
  }
  
  return [min, max];
  
//   const sorted = arr.sort((a,b) => a-b);
  
//   const min = sorted[0];
//   const max = sorted[sorted.length-1];
  
//   return [min, max];
  
  // return [Math.min(...arr), Math.max(...arr)];
}
