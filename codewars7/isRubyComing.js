// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

function isRubyComing(list) {
  // return list.some(dev => dev.language === 'Ruby');
  
  // return !!list.find(dev => dev.language === 'Ruby');
  
  return list.filter(dev => dev.language === 'Ruby').length > 0;
}
