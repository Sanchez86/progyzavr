//Exclamation marks series #8: Move all exclamation marks to the end of the sentence

function remove (string) {
//   const ex = string.match(/!+/g); // [] OR null
//   const withOutEx = string.replace(/!/g, '');
  
  //return withOutEx + (ex || []).join('');
  //return string.replace(/!/g, '') + (string.match(/!+/g) || []).join('');
  
  //return string.replace(/!/g, '') + string.replace(/[^!]/g, '');
  
  const ex = string.split('').filter(s => s === '!').join('');
  const withOutEx = string.split('').filter(s => s !== '!').join('');
  
  return withOutEx + ex;
}
