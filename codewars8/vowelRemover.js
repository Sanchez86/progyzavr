function shortcut (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // создал массив гласных
    const symbols = string.split(''); // разбил строку на массив элементов
    const strWithOutVowels = []; // подготовил переменную для символов без гласных
    
    symbols.forEach(el => {
      // проверяю, если буква не является гласной, то добавляю её в strWithOutVowels
      if(!vowels.includes(el)) strWithOutVowels.push(el);
    });
    
    return strWithOutVowels.join(''); // склеиваю буквы в строку и возвращаю результат
  }