// Coding Meetup #11 - Higher-Order Functions Series - Find the average age

function getAverageAge(list) {
  const ages = list.reduce((acc, {age}) => acc += age, 0);
  
  const averageAge = Math.round(ages / list.length);
  
  return averageAge;
}
