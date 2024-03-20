

function countDevelopers(list) {
//   return list
//     .filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript')
//     .length;
//   return list
//   .filter(dev => dev.continent === 'Europe')
//   .filter(dev => dev.language === 'JavaScript')
//   .length;
  
 const continent = /Europe/;
 const language = /JavaScript/;
    
    return list
      .filter(dev => continent.test(dev.continent) && language.test(dev.language))
      .length;
}
