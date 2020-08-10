// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    prompt("choose a password length between 8 and 128 characters");
    confirm("choose lowercase, uppercase, numeric, and/or special characters");


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);