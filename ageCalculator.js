function ageCalculator(name, yearOfBirth, currentYear) {
  age = currentYear - yearOfBirth;
  return name + " is " + age + " years old. ";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));