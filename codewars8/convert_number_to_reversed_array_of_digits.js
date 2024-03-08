// Convert number to reversed array of digits

function digitize(n) {
    return n.toString() // преобразуем число в строку
      .split('') // полученную строку разбиваем на элементы (массив)
      .reverse() // поллученный массив переварачиваем
      .map(el => parseInt(el));
    // проходимся с помощью map и преобразуем каждый строчный элемент в число
  }