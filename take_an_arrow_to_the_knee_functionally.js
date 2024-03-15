const ArrowFunc = function(arr) {
  //const res = arr.map(char => String.fromCharCode(char)).join('');
  //const res = arr.reduce((acc, cur) =>acc += String.fromCharCode(cur), '');
  const res = String.fromCharCode(...arr);
  
  return res;
}
