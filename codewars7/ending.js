// String ends with?

function solution(str, ending){
  // return str.endsWith(ending);
  
//   const letters = [...str].reverse();
//   const endLetters = [...ending].reverse();
  
//   let result = true;
  
//   for (let i = 0; i < endLetters.length; i++) {
//     if (letters[i] !== endLetters[i]){
//       result = false;
//       break;
//     }
//   }
  
//   return result;
  
  const letters = [...str];
  const endLetters = [...ending];
  const diff = letters.length - endLetters.length;
  const countEnd = endLetters.length;
  
  let result = true;
  
  for (let i = countEnd-1; i >= 0 ; i--) {
    
    if (letters[i+diff] !== endLetters[i]){
      result = false;
      break;
    }
  }
  
  return result;
}
