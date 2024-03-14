//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr,n){
  // return arr.map(num => num.toFixed(2)).filter(x => x < n).length;
  
  const numbers = arr.slice();
  
  function convertTypeAndRound (number) {
    return Number.parseFloat(number.toFixed(2));
  }
  
  return numbers.map(num => convertTypeAndRound(num)).filter(x => x < n).length;
  
}
