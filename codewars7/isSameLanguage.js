// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

function isSameLanguage(list) {
  const len = list[0].language;

  return list.every(dev => dev.language === len);
}
