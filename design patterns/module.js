function ConsoleClass() {
  let Input = null;
  let Output = null;
  let Error = null;

  this.prepare = function () {
    this.Input = new InputStream();
    this.Output = new OutputStream();
    this.Error = new ErrorStream();
  };

  this.unprepare = function () {
    this.Input = null;
    this.Output = null;
    this.Error = null;
  };

  // ...

  let printNewLine = function () {
    // code that prints a new line
  };

  let printString = function (params) {
    // code that prints parameters
  };

  let printInteger = function (params) {
    // code that prints parameters
  };

  let printBoolean = function (params) {
    // code that prints parameters
  };

  let ScanNewLine = function () {
    // code that looks for a newline
  };

  let ScanString = function (params) {
    // code that inputs data into parameters
  };

  let ScanInteger = function (params) {
    // code that inputs data into parameters
  };

  let ScanBoolean = function (params) {
    // code that inputs data into parameters
  };

  // ...
}
