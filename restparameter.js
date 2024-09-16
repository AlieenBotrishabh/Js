function myFunc() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }
  
  myFunc("Nick", "Anderson", 10, 12, 6);
  // "Nick"
  // "Anderson"
  // 10
  // 12
  // 6