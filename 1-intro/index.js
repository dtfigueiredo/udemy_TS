var firstName = "Daniel";
var surName = "Figueiredo";
var fullName = "";
var greeting = function (firstName, surName) {
    return (fullName = "".concat(firstName, " ").concat(surName));
};
var span = document.getElementById("span");
span.innerHTML = greeting(firstName, surName);
