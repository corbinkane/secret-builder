
var generateBtn = document.querySelector("#generate");

function randomCharacterSelector(characterlist) {
  var randomNumber = Math.random() * characterlist.length;
  var roundedDownNumber = Math.floor(randomNumber);
  
  return characterlist[roundedDownNumber]
}

function generatePassword() {
  var passwordLength = prompt('Please select a length for your password between 8 and 128');
  var uppercaseletterconfirm = confirm('Include upper case letters?');
  var lowercaseletterconfirm = confirm("Include lower case letters?");
  var specialcharacterConfirm = confirm('Include special characters?')
  var numberconfirm = confirm('Include numbers?')
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*()';
var number = '0123456789';



 passwordLength = parseInt(passwordLength);
var includeUpperCase = uppercaseletterconfirm;
var includeLowerCase = lowercaseletterconfirm;
var includeSpecial = specialcharacterConfirm;
var includeNumber = numberconfirm;

var generatedPassword = "";
var characters = "";

 
if (typeof passwordLength === "number" && passwordLength >= 8 && passwordLength <= 128) {
} 
else {
  alert("Password length INVALID. Please enter a number between 8 and 128.");
}

if (includeUpperCase) {
  characters = characters + (uppercase)
}
if (includeLowerCase) {
  characters = characters + (lowercase)
}
if (includeSpecial) {
  characters = characters + (special)
}
if (includeNumber) {
  characters = characters + (number)
}

for (let i = 0; i < passwordLength; i++) {
  generatedPassword = generatedPassword + randomCharacterSelector(characters)
}

return generatedPassword

}

function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;

}

generateBtn.addEventListener("click", writePassword);


