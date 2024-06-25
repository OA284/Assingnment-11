//--------------------SignUp--------------------

var nameOutput = document.getElementById("signUpName");
var emailOutput = document.getElementById("signUpEmail");
var passwordOutput = document.getElementById("signUpPassword");
var allUsers = [];

if (localStorage.getItem("allUsers") != null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}
else{
    allUsers = [];
}

function errorName(){
    var regex = /^([a-zA-Z]{1,30}\s*)+$/g;

    if (regex.test(nameOutput.value) == true){
        document.getElementById("nameAlert").classList.replace("d-block", "d-none");
        return true;
    }
    document.getElementById("nameAlert").classList.replace("d-none", "d-block");
    return false;
}

function erroremail(){
    if (emailOutput.value != ""){
        document.getElementById("emailAlert").classList.replace("d-block", "d-none");
        return true;
    }
    document.getElementById("emailAlert").classList.replace("d-none", "d-block");
    return false;
}

function errorPassword(){
    if (passwordOutput.value != ""){
        document.getElementById("PasswordAlert").classList.replace("d-block", "d-none");
        return true;
    }
    document.getElementById("PasswordAlert").classList.replace("d-none", "d-block");
    return false;
}

function signUp(){
    if (errorName() == true && erroremail() == true && errorPassword() == true){
        user = {
            name : nameOutput.value,
            email : emailOutput.value,
            password : passwordOutput.value,
        }
        allUsers.push(user);
        location.href = "./index.html";
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
}

//--------------------SignIn--------------------

var emailInput = document.getElementById("signInEmail");
var passwordInput = document.getElementById("signInPassword");
var y;

function check(){

    for (var i = 0; i < allUsers.length; i++){
        if (emailInput.value == allUsers[i].email && passwordInput.value == allUsers[i].password){
            y = allUsers[i].name;
            localStorage.setItem("userName", y);
            location.href = "home.html";
            break;
        }
    }      
}

//---------------------home---------------------

document.getElementById("homeName").innerHTML = "Welcome " + localStorage.getItem("userName");
console.log(y);

function logOut(){
    location.href = "./index.html"
    localStorage.removeItem('userName');
}

//----------------------------------------------
function clear(){
    nameOutput.value = "";
    emailOutput.value = "";
    passwordOutput.value = "";
}