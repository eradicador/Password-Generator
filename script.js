// hooking into the button in the html
var generateBtn = document.querySelector("#generate");
// Arrays of characters for the password
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "0123456789";
var punctuationChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
//this function generates the password
function generatePassword() {
  var avaiableChars = ""
  var guaranteedChars = ""
  // first prompt for the user
  var numberOfCharacters = prompt("How many characters do you want the password to be between 8 to 128?")
  // used a while loop: length of password at least 8 characters and no more than 128 characters
  while (numberOfCharacters <= 7 || numberOfCharacters >= 129) {
    // if specified condition is false it will prompt the alert
    alert("Password length must be between 8 to 128 characters, try again please");
    //2nd prompt will come up after the alert
    numberOfCharacters = prompt("How many characters do you want the password to be between 8 to 128?")
    // message the console with number of characters selected by the user
    console.log("len: " + numberOfCharacters)
  }
  //3rd prompt for the user if above statement is true
  var lowercase = confirm("do you want lowercase characters for your password?");
  //message the console with the character selected by the user
  console.log('lower Case: ' + lowercase);
  //4th prompt for the user
  var uppercase = confirm("do you want upper characters for your password?");
  //message the console with the character selected by the user
  console.log('Upper Case: ' + uppercase);
  //5th prompt for the user
  var numeric = confirm("do you want numbers for your password?");
  //message the console with the character selected by the user
  console.log('Numeric ' + numeric);
  //6th prompt for the user
  var punctuation = confirm("do you want special characters for your password?");
  //message the console with the character selected by the user
  console.log('Punctuation ' + punctuation);
//if lowercase variable is true it will random pick a letter from lowerChars 
  if (lowercase) {
    guaranteedChars += randomize(lowerChars)
    avaiableChars += lowerChars
  }
  //if uppercase variable is true it will random pick a letter from upperChars
  if (uppercase) {
    guaranteedChars += randomize(upperChars)
    avaiableChars += upperChars
  }
  //if numeric variable is true it will random pick a letter from munberChars
  if (numeric) {
    guaranteedChars += randomize(numberChars)
    avaiableChars += numberChars

  }
  //if punctuation variable is true it will random pick a letter from punctuationChars
  if (punctuation) {
    guaranteedChars += randomize(punctuationChars)
    avaiableChars += punctuationChars

  }
  //used the for loop: the var i = guaranteedChars by the length of the string, i must be less than number of "numberOfCharacters", i increases the value
  var password = guaranteedChars;
  for (let i = guaranteedChars.length; i < numberOfCharacters; i++) {
    //adding password string to randomize function
    password += randomize(avaiableChars)
  }
  //The return statement stops the execution of function and returns a value from that function
  return password
  //close the function generatePassword()
}
//function picks one random character from string
function randomize(characters) {
  //math.floor Math.random returns random characters + the lenght to the user 
  var randomIndex = Math.floor(Math.random() * characters.length);
  //the return statement stops the execution of function and returns a value from that function
  return characters[randomIndex]
}
//this function calls another function is hooking into 2 elements for the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//when user clicked button it writes the function above
generateBtn.addEventListener("click", writePassword);