# password-generator
## Description
I created a code in javascript to employees with access to sensitive data, the code will generate a random password that contains lowercase, uppercase, numbers and punctuation characters, the minimun length of the password is 8 characters with a maximun length of 128 characters. This code will generate a strong password that provides greater security for the company. The code is free of console errors.


# script.js
line 2 hooking into the button in the html with id="generate"

line 4 4 sets of variables with arrays of characters for the password

line 9 function generatePassword: generates the password 

line 13 first prompt for the user "How many characters do you want the password to be between 8 to 128?"

line 15 used a while loop: length of password at least 8 characters and no more than 128 characters

line 17 if specified condition is false it will prompt the alert: "Password length must be between 8 to 128 characters, try again please"

line 19 2nd prompt will come up after the alert: "How many characters do you want the password to be between 8 to 128?"

line 21 message the console with number of characters selected by the user

line 24 3rd prompt for the user if above statement is true

line 26 message the console with the character selected by the user

line 28 4th prompt for the user

line 30 message the console with the character selected by the user

line 32 5th prompt for the user

line 34 message the console with the character selected by the user

line 36 6th prompt for the user

line 38 message the console with the character selected by the user

line 40 if statement if lowercase variable is true it will random pick a letter from lowerChars 

line 45 if statement if uppercase variable is true it will random pick a letter from upperChars

line 50 if statement if numeric variable is true it will random pick a letter from munberChars

line 55 if statement if punctuation variable is true it will random pick a letter from punctuationChars

line 62 used the for loop: the var i = guaranteedChars by the length of the string, i must be less than number of "numberOfCharacters", i increases the value

line 65 adding password string to randomize function

line 68 The return statement stops the execution of function and returns a value from that function

line 70 close the function generatePassword()

line 72 function picks one random character from string

line 74 math.floor Math.random returns random characters + the lenght to the user 

line 76 the return statement stops the execution of function and returns a value from that function

line 79 this function calls another function is hooking into 2 elements for the password

line 85 when user clicked button it writes the function above

# license
MIT License

Copyright (c) [2020] [Michael Amaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.