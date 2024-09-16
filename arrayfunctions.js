// Array.prototype.map() takes an array, does something on its elements and returns an array with the transformed elements.
// Array.prototype.filter() takes an array, decides element by element if it should keep it or not and returns an array with the kept elements only
// Array.prototype.reduce() takes an array and aggregates the elements into a single value (which is returned)
// Array.prototype.find() takes an array, and returns the first element that satisfies the provided condition.





const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
  ];
  
  const aboveTenSum = students
    .map(student => student.grade) // we map the students array to an array of their grades
    .filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
    .reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one
  
  console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie below 10 is ignored




  const evenNumbers = numbers.filter(function(n) {
    return n % 2 === 0; // true if "n" is par, false if "n" isn't
  });
  console.log(evenNumbers); // [0, 2, 4, 6]



  const evenNumber = numbers.filter(n => n % 2 === 0);
console.log(evenNumber); // [0, 2, 4, 6]



const sum = numbers.reduce(
    function(acc, n) {
      return acc + n;
    },
    0 // accumulator variable value at first iteration step
  );
  
  console.log(sum) // 21