const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]


function myFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params)
  }
  
  myFunc("a", "b", "c", "d", "e", "f")
  // "a"
  // "b"
  // ["c", "d", "e", "f"]