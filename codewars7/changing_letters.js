//Changing letters

function swap (string) {
  const vowels = ["a", "e", "i", "o", "u"]; // aeiou
  
  //return string.split('').map(s => vowels.includes(s) ? s.toUpperCase() : s).join('');
  
  return string.replace(/[aeiou]/g, (s) => s.toUpperCase());
}
