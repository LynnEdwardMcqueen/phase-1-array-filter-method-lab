// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const driverS = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (drivers, searchName) => {
    return (drivers.filter(function (driver) { return (driver.toUpperCase() === searchName.toUpperCase())}));
}
const fuzzyMatch = (drivers, searchName) => {
    return drivers.filter(function(driver){return (driver.startsWith(searchName))});
}
const matchName = (drivers, matchName) => {
    return drivers.filter(    function (driver) { return (driver.name === matchName)})
}

let driverPoo = "Bobby";
console.log(driverPoo.startsWith("Bob"))

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "lordGodKingBooFoo"));


console.log(fuzzyMatch(drivers, "Bob"))

console.log(matchName(driverS, "Bobby"));