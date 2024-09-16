const a = (data) =>{
    return data
}


console.log(a(10));




function myFunc() {
    this.myVar = 0;
    setTimeout(
      () => { // this taken from surrounding, meaning myFunc here
        this.myVar++;
        console.log(this.myVar) // 1
      },
      0
    );
  }