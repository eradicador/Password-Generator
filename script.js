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
    while(numberOfCharacters <= 7 || numberOfCharacters >= 129) {
      alert("Password length must be between 8 to 128 characters, try again please");
      numberOfCharacters = prompt("How many characters do you want the password to be?")
      console.log("len:", numberOfCharacters)
    }
    var lowercase = confirm("do you want lowercase characters for your password?");
    var uppercase = confirm("do you want upper characters for your password?");
    var numeric = confirm("do you want numbers for your password?");
    var punctuation = confirm("do you want special characters for your password?");

    // get  random character from the lower container   // math.floor math.random   (get a number )
    if (lowercase) {Math.floor(Math.random * lowercase.length);
      password = password + lowercase[total]
      console.log(lowercase);
    }
    if (uppercase) {Math.floor(Math.random * uppercase.length);
      password = password + lowercase[total]
      console.log(uppercase);
    }
    if (numeric) {Math.floor(Math.random * numeric.length);
      password = password + lowercase[total]
      console.log(numeric);
    }
    if (punctuation) {Math.floor(Math.random * punctuation.length);
      password = password + lowercase[total]
      console.log(punctuation);
    }
    var total = lowercase.concat(uppercase);
    var total = numeric.concat(punctuation);
  
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
