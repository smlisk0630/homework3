// Character arrays
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", ",", ".", ";", ":"];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Asks for user input
function generateCriteria() {
  var pLength = parseInt(
    prompt("Choose a password length.")
  );

  if (isNaN(pLength) === true) {
    alert("The length must be a number");
    return;
  }

  // Conditional statement to check for length of password
  if (pLength < 8 || pLength > 128) {
    alert("Your password must contain between 8 and 128 characters.");
  }

  // Variable to store whether user wants lowercase letters
  var storeLower = confirm(
    "Click OK to include lowercase letters"
  );

  // Variable to store whether user wants uppercase letters
  var storeUpper = confirm(
    "Click OK to include uppercase letters"
  );

  // Variable to store whether user wants special characters
  var storeSpecChars = confirm(
    "Click OK to include special characters"
  );

  // Variable to store whether user wants numbers
  var storeNumbers = confirm(
    "Click OK to include numbers"
  );

  // Conditional statement to check if user selects at least one character type
  if (storeLower === false && storeUpper === false && storeSpecChars === false && storeNumbers === false
  ) {
    alert("You must make at least one selection.");
    return;
  }

  // Object to store user input
  var userInput = {
    storeLower: storeLower,
    storeUpper: storeUpper,
    storeSpecChars: storeSpecChars,
    storeNumbers: storeNumbers,
  };
  
  return userInput;

}

// Function to get random array element
function getRandom(arr) {
  var randInd = Math.floor(Math.random() * arr.length);
  var randEl = arr[randInd];

  return randEl;
}

// Function to generate password based on user input
function generatePassword() {
  var inputs = generateCriteria();

  // Variable to store password during concatenation
  var finalPassword = [];

  // Array to store potential character types to include in password
  var potentialCharTypes = [];

  // Array to store character types selected for inclusion in password
  var selectedCharTypes = [];

  // Conditional adding array of lowercase letters into array of potential character Types based on user input
  // then pushes
  if (inputs.storeLower) {
    potentialCharTypes = potentialCharTypes.concat(lowerArray);
    selectedCharTypes.push(getRandom(lowerArray));
  }

  // Conditional adding array of uppercase letters into array of potential character Types based on user input
  // then pushes
  if (inputs.storeUpper) {
    potentialCharTypes = potentialCharTypes.concat(upperArray);
    selectedCharTypes.push(getRandom(upperArray));
  }

  // Conditional adding array of special characters into array of potential character Types based on user input
  // then pushes
  if (inputs.storeSpecChars) {
    potentialCharTypes = potentialCharTypes.concat(specChars);
    selectedCharTypes.push(getRandom(specChars));
  }

  // Conditional adding array of numbers into array of potential character Types based on user input
  // then pushes
  if (inputs.storeNumbers) {
    potentialCharTypes = potentialCharTypes.concat(numbers);
    selectedCharTypes.push(getRandom(numbers));
  }

  // For loop to iterate over the password length from the userInput object, selecting random indices from the array of possible character types and concatenating those inputs into the finalPassword variable
  for (var i = 0; i < inputs.length; i++) {
    var potentialInput = getRandom(potentialCharTypes);
  
    finalPassword.push(potentialCharTypes);
  }

  // Include at least one selected character type in the final password
  for (var i = 0; i < selectedCharTypes.length; i++) {

    finalPassword[i] = selectedCharTypes[i];
  }

  // Transform the finalPassword into a string and pass into writePassword
  return finalPassword.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Returns undefined
console.log(writePassword());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);