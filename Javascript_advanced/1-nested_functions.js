var globalVariable = "Welcome";

function outer() {
  alert(globalVariable);

  var course = "Holberton";

  function inner() {
    alert(globalVariable + " " + course);

  }
}
