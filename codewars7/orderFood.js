//Coding Meetup #14 - Higher-Order Functions Series - Order the food

function orderFood(list) {
  return list.reduce((acc, cur) => {
    acc[cur.meal] = (acc[cur.meal] || 0) + 1;
    //acc[cur.meal] = acc[cur.meal] ? acc[cur.meal] + 1 : 1;
    
    return acc;
  }, {});
}

const acc = {};

acc.test1 = 100;
acc['test2'] = 10;

console.log(acc['test2'])
