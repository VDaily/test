class OneClass {
  constructor() {
    this.criticalError();
  }

  criticalError() {
    new Error("Error");
  }
}