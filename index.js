const driver = {}

function lowerCaseDrivers(drivers) {
  let newArray = drivers.map(element => element.toLowerCase());
  return newArray
}

function nameToAttributes(drivers) {
  let newArray = drivers.map(function(element) {
    let fullname = element.split(' ')
    let answer = Object.assign({}, {firstName: fullname[0], lastName: fullname[1]});
    return answer;
  });
  return newArray
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
}
