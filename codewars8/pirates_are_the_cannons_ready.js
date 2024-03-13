// Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => {
  //const res = Object.values(gunners).includes('nay') ? 'Shiver me timbers!':'Fire!';
  //const res = Object.values(gunners).some(el => el === 'nay') ? 'Shiver me timbers!':'Fire!';
  
  /*const res = [];
  
  for(key in gunners) {
    if(gunners[key] === 'nay') res.push(true);
  }
  
  return res[0] ? 'Shiver me timbers!':'Fire!';*/


  /*const res = [false];
  
  for(key in gunners) {
    if(gunners[key] === 'nay') res[0] = true;
  }
  
  return res[0] ? 'Shiver me timbers!':'Fire!';*/
  
  let res = false;
  
  for(key in gunners) {
    if(gunners[key] === 'nay') res = true;
  }
  
  return res ? 'Shiver me timbers!':'Fire!';
  
  // 'nay' -> 'Shiver me timbers!':'Fire!'
}
