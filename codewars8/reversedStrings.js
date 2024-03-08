//Reversed Strings

function solution(str){
    //const reversed = str.split('').reverse().join('');
    // Разбил строку на массив эллементов
    // Перевернул массив
    // Склеил массив

    //const reversed = str.split('').reduceRight((acc, cur) => acc+=cur, '');
    // Разбил строку на массив эллементов
    // reduceRight -> Перебрал массив с конца в ночало и каждый эллемент сконкотенировал. 

    const reversed = str.split('').reduce((acc, cur) => {
      acc.unshift(cur);
      return acc;
    }, []).join('');
    // Разбил строку на массив эллементов
    // перебрал массив и добавил каждый эоемент в начало массива
    // Склеил массив
    
    
    return reversed; // Вернул полученный результат. 
  }