// Contamination #1 -String-

function contamination(text, char){
    // разбить строку на массив элементов
    // заменить все элементы массива на char
    // склеить элементы массива в строку
    
    //const result = text.split('').fill(char).join('');
    //const result = char.repeat(text.length);
    const result = text.replace(/./g, char);
    
    console.log(result);
    
    return result;
  }