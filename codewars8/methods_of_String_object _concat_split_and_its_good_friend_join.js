// Methods of String object concat split and its good friend join

function splitAndMerge(string, separator) {
    //return string.split(' ').map(w => w.split('').join(s)).join(' ');
    
    const words = string.split(' '); // получить слова
    
    const wordsWithSep = words.map(word => {
      const letters = word.split(''); // разбить каждое слово на массив из букв
      return letters.join(separator) // склеить буквы в слово с использованием разделителя
    })
    
    return wordsWithSep.join(' ');
  }