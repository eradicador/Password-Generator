// Assignment Code
var generateBtn = document.querySelector("#generate");

// I need a new, secure password
  // var length = (len)?(len):(10);
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
 
  function generatePassword() {
    var numberOfCharacters = prompt("How many characters do you want?")

  }




//   while( password.length<length ) {
//       entity1 = Math.ceil(string.length * Math.random()*Math.random());
//       entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
//       entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
//       hold = string.charAt( entity1 );
//       hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
//       character += hold;
//       character += numeric.charAt( entity2 );
//       character += punctuation.charAt( entity3 );
//       password = character;
//   }
//   password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//   return password.substr(0,len);
// }

// console.log( password_generator() );






// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
