// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

function findAdmin(list, lang) {
//   return list
//     .filter(dev => dev.githubAdmin === 'yes')
//     .filter(dev => dev.language === lang);
  
  // return list.filter(dev => dev.githubAdmin === 'yes' && dev.language === lang);
  
  //return list.filter(({githubAdmin, language}) => githubAdmin === 'yes' && language === lang);
  
  const adimins = [];
  
  list.forEach(dev => {
    if (dev.githubAdmin === 'yes' && dev.language === lang) {
      adimins.push(dev);
    }
  });
  
  return adimins;
}
