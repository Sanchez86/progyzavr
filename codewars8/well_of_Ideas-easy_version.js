function well(arr){ 
  // Если есть одно или два слова 'good', верните "Publish!"
  // Если слова 'good' больше двух - верните "I smell a series!".
  // Если хороших идей нет, как это часто бывает, верните "Fail!".
  
  const goodsCount = arr.filter(el => el === 'good').length;
  
  if(goodsCount === 1 || goodsCount === 2) return 'Publish!';
  
  if(goodsCount > 2) return 'I smell a series!';
  
  if(goodsCount === 0) return 'Fail!';
}
