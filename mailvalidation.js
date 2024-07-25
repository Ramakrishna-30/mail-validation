var emailField=document.getElementById("email-field");
var emailLabel=document.getElementById("email-label");
var emailError=document.getElementById("email-error");

function validateEmail(){
    emailLabel.style.bottom="45px";

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-za-z]*[\.][a-z]{2,3}$/)){
        

emailError.innerHTML ="Please enter a valid Email";
emailField.style.borderBottomcolor = "red";
emailError.style.top="120%";
return false;
    }
    emailError.innerHTML ="";
    emailField.style.borderBottomcolor = "green";
    emailError.style.top="100%";
    return true;
} 










 