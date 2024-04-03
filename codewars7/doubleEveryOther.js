// Double Every Other

function doubleEveryOther(numbers) {
  return numbers.map((number, index) => {
    
    console.log({index}, `${index}%2`, index%2);
    
    if(index % 2 !== 0) {
      return number * 2;
    } else {
      return number;
    }
  });
}

// function doubleEveryOther(numbers) {
//   return numbers.map((number, index) => (index % 2 !== 0) ? number * 2 : number);
// }
