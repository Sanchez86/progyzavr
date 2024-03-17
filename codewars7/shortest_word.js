function findShort(s){
    //return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
    
    const words = s.split(' ');
    
    const findShortestWord = words => words.sort((a,b) => a.length - b.length)[0];
    
    const shortestWordLength = findShortestWord(words).length;
    
    return shortestWordLength;
}