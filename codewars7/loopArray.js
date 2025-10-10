function loopArr(arr, direction, steps) {
  
  const numbers = [...arr];
  
  if (direction === 'left') {
    const left = numbers.splice(0, steps);

    numbers.push(...left)
  } else {
    const right = numbers.splice(-steps);
    
    numbers.unshift(...right)
  }
  
  return numbers;
}
