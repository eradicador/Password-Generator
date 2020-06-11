// Assignment Code
var generateBtn = document.querySelector("#generate");
// I need a new, secure password
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var total = ""
  var password = ""
//  added prompts for user
  function generatePassword() {
    var numberOfCharacters = prompt("How many characters do you want the password to be?")
    // length of at least 8 characters and no more than 128 characters
    while(numberOfCharacters <= 8 || numberOfCharacters >= 128) {
      alert("Password length must be between 8 to 128 characters, try again please");
      numberOfCharacters = prompt("How many characters do you want the password to be?")
      console.log("len:", numberOfCharacters)
    }
    var lowercase = confirm("do you want lowercase characters for your password?");
    var uppercase = confirm("do you want upper characters for your password?");
    var numeric = confirm("do you want numbers for your password?");
    var punctuation = confirm("do you want special characters for your password?");


// lower  the 
    // get  random character from the lower container   // math.floor math.random   (get a number )
    var index = Math.floor(Math.random * lowercase.length)
    password = password + lowercase[index]
    // total = total + lowercase

// upper 
 // get  random character from the upper container 
    // total = total + uppercase


  /// you will have some characters inside of the password  1 low 1 num   total has all the lowe char and all the numbers  len = 10
  
  // fill the passworkd unitl get the length  /// pick random characters from total  get 8 more characters  // loop to get the rest of the characters

  return password
  }




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
