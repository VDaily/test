class OneClass {
  constructor() {
    this.fixCriticalError();
  }

  fixCriticalError() {
    console.log("fix critical error");
  }
}

const objArr = [
  { id: 0, title: "Book1"},
  { id: 1, title: "Book Mr.Supper"}
];

for(let i = 0; i < objArr.length; i++) {
  console.log(objArr[i]);
}