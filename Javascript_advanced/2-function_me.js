function welcomeMessage(fullName) {
  return function () {
    alert("Welcome " + fullName);
  };
}

var guillaume = welcomeMessage("Guillaume"); // var contains a call welcomeMessage with Guillaume as argument
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");


guillaume();
alex();
fred();
