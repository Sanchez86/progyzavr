function reversed (number) {
  return number.toString().split('').reverse().join('');
}

function mirrorImage(arr){
  let pair = [-1, -1];
  const ln = arr.length;
  
 for(let i = 0; i < ln; i++) {
   const currentN = arr[i];
   const nextN = arr[i+1];
    
    if(nextN !== undefined && reversed(currentN) === nextN.toString()){
      pair = [currentN, nextN];
      break;
    }
 }
  
  return pair;
}

// function mirrorImage(arr){
//   let pair = null;
  
//   const some = arr.some((currentN, i) => {
//     const nextN = arr[i+1];
    
//     if(nextN !== undefined && reversed(currentN) === nextN.toString()){
//       pair = [currentN, nextN];
//       return true;
//     }
//   })
  
//   return some ? pair : [-1, -1];
// }
