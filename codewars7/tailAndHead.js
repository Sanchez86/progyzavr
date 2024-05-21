// https://www.codewars.com/kata/573156709a231dcec9000ee8/javascript

function tailAndHead(numbres){
  
  return numbres.reduce((acc, cur, i, nums) => {
//     const currentNumberArr = cur.toString().split('');
//     const currentTail = currentNumberArr[currentNumberArr.length - 1]; //string
    const currentTail = cur % 10; // number
    const nextArr = nums[i+1];
    const nextHead = nextArr ? nextArr.toString().split('')[0] : null; //string
    
    if (nextHead !== null) {
      return acc * (currentTail + parseInt(nextHead));
    }
    
    return acc;
  }, 1);
  
}

// 123 % 10 = 3

// 10 * 12 = 120

// 10* 45 = 450 6

// 10* 46 = 460 
