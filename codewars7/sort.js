const OrderPeople = function(people){
  return people.sort( (a ,b) => a.age - b.age );
}

// [6, 5, 8, 2]

// (a ,b) pair

// 6 - 5 = 1
// [5, 6, 8, 2]

//  6 - 8 = -2
// [5, 6, 8, 2]

// 8 - 2 = 6
// [5, 6, 2, 8]

// [5, 2, 6, 8]

// [2, 5, 6, 8]
