// Word to binary


function wordToBin(str){
  
// const array = [...str].map(letter => letter.charCodeAt().toString(2).padStart(8, '0'));
  
   const array = [...str].map(letter => 0+letter.charCodeAt().toString(2));
  
  return array;
}
