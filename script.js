// hooking into the button in the html
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

// this function calls another function is hooking into 2 elements for the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// when user clicked button it writes the function above
generateBtn.addEventListener("click", writePassword);
