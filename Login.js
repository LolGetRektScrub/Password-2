var LowerCaseLetters = /[a-z]/g;
var UpperCaseLetters = /[A-Z]/g;
var Numbers = /[0-9]/g;

var objPeople = [
    {
        username: "Abra",
        password: "Potatochip99!"
    },
    {
        username: "Jason",
        password: "JustABahn23!"
    },
    {
        username: "Iftemon",
        password: "Atheistic1"
    }
]

var objPeople2 = []
var objPeople3 = []

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var objPeople2 = JSON.parse(localStorage.getItem("NEW")) || []
    var objPeople3 = JSON.parse(localStorage.getItem("NEW2")) || []

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in")
            return
        }
        if(username == objPeople2 && password == objPeople3) {
            console.log(username + " is logged in")
            return
        }
    }
    console.log("Incorrect username or password")
}

function RegisterUser() {
    var registerUser = document.getElementById("newUsername").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser = {
        username: registerUser, 
        password: registerPassword
    }

    for(i = 0; 1 < objPeople.length; i++) {
        if(registerUser == objPeople[i].username) {
            alert("That username is already taken, please try another")
            return
        } else if(registerPassword.length < 10 ) {
            alert("Your password must be at least 10 characters long")
            return
        } else if(!registerPassword.match(UpperCaseLetters)) {
            alert("Your password must contain at least one capital letter")
            return
        } else if(!registerPassword.match(LowerCaseLetters)) {
            alert("Your password must contain at least one lowercase letter")
            return
        } else if(!registerPassword.match(Numbers)) {
            alert("Your password must contain at least one number")
            return
        } objPeople3.push(registerPassword)
          objPeople2.push(registerUser)
          localStorage.setItem("NEW", JSON.stringify(objPeople2));
          localStorage.setItem("NEW2", JSON.stringify(objPeople3));
          console.log(objPeople2)
          return
    }
}