function myLinkedIn() {
  window.open("https://www.linkedin.com/in/laura-godinez-8a0353148/");
}
function myGitHub() {
  window.open("https://github.com/LauraGodinez");
}

var submit = document.getElementById("Submit");

function submit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;

  console.log("sucess");
}
