function greetDevelopers(list) {
  const devs = list.slice();
  const template = (firstName, language) => {
    return `Hi ${firstName}, what do you like the most about ${language}?`;
  }

  console.log( {...devs[0], greeting: 'qwqwe'} );
  
  return devs.map(dev => {
    return {
      ...dev,
      greeting: template(dev.firstName, dev.language)
    }
  });
}
