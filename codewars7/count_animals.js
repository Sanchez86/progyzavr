// Training JS #37: Unlock new weapon---RegExp Object

function countAnimals(animals, count){
  return count.map(animal => {
    const x = animals.match(new RegExp(animal, 'g')); // ["dog", "dog"] || ["cat"] || null
    
    return x === null ? 0 : x.length;
  });
  
//    return count.map(animal => (animals.match(new RegExp(animal, 'g')) || []).length);
  
//   return count.map(animal => {
//     return (animals.match(new RegExp(animal, 'g')) || []).length;
//   });
  
  //-------------------
  
//   return count.map(animal => {
//     return (animals.match(new RegExp(animal, 'g')) || []).length
//   });
  
//   return count.map(animal => animals.split(animal).length-1);
}
