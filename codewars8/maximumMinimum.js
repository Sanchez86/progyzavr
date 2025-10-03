// const min = function(list){
//      let minNumber = null;
  
//      list.forEach(n => {
//        if(minNumber === null) minNumber = n;
      
//        if(n < minNumber) minNumber = n;
//      })
  
//      return minNumber;
//  }

//  const max = function(list){
    
//      let mmaxNumber = null;
  
//      list.forEach(n => {
//        if(mmaxNumber === null) mmaxNumber = n;
      
//        if(n > mmaxNumber) mmaxNumber = n;
//      })
  
//      return mmaxNumber;
//  }

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
