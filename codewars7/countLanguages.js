// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  
//   return list.reduce((acc, dev) => {
//     //acc[dev.language] = (acc[dev.language] || 0) + 1;
    
//     acc[dev.language] = acc[dev.language] ? acc[dev.language] + 1 : 1;
    
//     return acc;
//   }, {});
  
  const acc = {};
  
  list.forEach(dev => {
    acc[dev.language] = (acc[dev.language] || 0) + 1;
  })
  
  return acc;
  
}
