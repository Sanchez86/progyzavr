// List Filtering

function filter_list(l) {
//   return l.filter(el => typeof el === 'number');

//----------------

//   const res = [];
//   for (el of l) if(typeof el === 'number') res.push(el);
//   return res;


  
//   return l.reduce((acc, cur) => {
//     if(typeof(cur) === 'number') acc.push(cur);
//     return acc;
//   }, []);

//----------------
  
  const res = [];
  
  l.forEach (el => {
    if(typeof el === 'number') res.push(el);
  });
  
  return res;
}
