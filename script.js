// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays characters for the password
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "0123456789";
var punctuationChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function generatePassword() {
  var avaiableChars = ""
  var guaranteedChars = ""
  // prompts for the user
  var numberOfCharacters = prompt("How many characters do you want the password to be between 8 to 128?")
  // length of at least 8 characters and no more than 128 characters
  while (numberOfCharacters <= 7 || numberOfCharacters >= 129) {
    alert("Password length must be between 8 to 128 characters, try again please");
    numberOfCharacters = prompt("How many characters do you want the password to be between 8 to 128?")
    console.log("len: " + numberOfCharacters)
  }
  var lowercase = confirm("do you want lowercase characters for your password?");
  console.log('lower Case: ' + lowercase);
  var uppercase = confirm("do you want upper characters for your password?");
  console.log('Upper Case: ' + uppercase);
  var numeric = confirm("do you want numbers for your password?");
  console.log('Numeric ' + numeric);
  var punctuation = confirm("do you want special characters for your password?");
  console.log('Punctuation ' + punctuation);

  // get  random character from the lower container   // math.floor math.random   (get a number )
  if (lowercase) {
    guaranteedChars += randomize(lowerChars)
    avaiableChars += lowerChars
  }
  if (uppercase) {
    guaranteedChars += randomize(upperChars)
    avaiableChars += upperChars
  }
  if (numeric) {
    guaranteedChars += randomize(numberChars)
    avaiableChars += numberChars

  }
  if (punctuation) {
    guaranteedChars += randomize(punctuationChars)
    avaiableChars += punctuationChars

  }

  var password = guaranteedChars;
  for (let i = guaranteedChars.length; i < numberOfCharacters; i++) {
    password += randomize(avaiableChars)
  }

  return password
}

//picks one random character from string
function randomize(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  // console.log(randomIndex)
  return characters[randomIndex]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



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