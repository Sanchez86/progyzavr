//Mumbling

function accum(s) {
	const letters = s.split('');
  
  // function modifiedLetters(letter, index) {
  //   const repeatedLetter = [];
    
  //   for(let i = 0; i <= index; i++){
  //     if(i === 0) {
  //       repeatedLetter.push(letter.toUpperCase())
  //     } else {
  //       repeatedLetter.push(letter.toLowerCase())
  //     }
  //   }
    
  //   return repeatedLetter.join('');
  // }
  
   function modifiedLetters(letter, index) {
     console.log(letter, index)
     
    return letter.toUpperCase() + letter.toLowerCase().repeat(index);
  }
  
  const mappedLetters = letters.map((letter, index) => modifiedLetters(letter, index)); 
  
  return mappedLetters.join('-');
}
