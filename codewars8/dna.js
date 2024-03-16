function DNAtoRNA(dna) {
  //return dna.replace(/T/g,'U');
  //return dna.split('').reduce((acc, cur) => acc += cur.replace('T','U'), '');

//   const res = dna.split('').reduce((acc, cur) => {
//     if(cur === 'T') {
//       return acc += 'U';
//     } else {
//       return acc+=cur;
//     }
//   }, '');
  
//   return res;
  
  const dnaArr = dna.split('');
  let res = '';
  
  dnaArr.forEach(el => {
    if(el === 'T') {
      res += 'U';
    } else {
      res += el;
    }
  })
  
  return res;

}
