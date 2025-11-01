function removeConsecutiveDuplicates(string) {
  const words = string.split(' ');

  const unicWords = words.reduce((acc, cur, i) => {
    if(cur !== acc[acc.length-1]) acc.push(cur);
    
    return acc;
  }, []);
  
  return unicWords.join(' ');
}
