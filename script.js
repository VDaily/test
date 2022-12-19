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

objArr.forEach(item => {
  console.log(item);
});