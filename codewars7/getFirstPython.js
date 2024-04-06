// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

function getFirstPython(list) {
  function returnPythonDev (pythonDev) {
    if (pythonDev) {
      return `${pythonDev.firstName}, ${pythonDev.country}`;
    } else {
      return 'There will be no Python developers';
    }
  }
  // const pythonDev = list.filter(dev => dev.language === 'Python');
  
  const pythonDev = list.find(dev => dev.language === 'Python');
  
  return returnPythonDev(pythonDev);
}
