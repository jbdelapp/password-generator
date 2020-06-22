
// Add Special Characters
var specialCharacterValue = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in passwordvar 
var numericValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in passwordvar 
var lowerCasedLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in passwordvar 
var upperCasedLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordOptions() {
    //Add Prompts based on acceptance criteria AFTER the password button is clicked
    var passwordLength = parseInt(
        prompt("Please enter the number of characters you want for a new password.")
    );
    console.log("Password Length =" + passwordLength);

    if (isNaN(passwordLength) === true) {
        alert('Password length must be a number');
        return;
    }

    if (passwordLength < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }
    if (passwordLength > 128) {
        alert("Password length must be less than 128 characters");
        return;
    }

    var numbers = confirm("Select 'OK' to include numbers in your password.");
    console.log("numbers is " + numbers);

    var lowerCases = confirm("Select 'OK' to include lowercase letters in your password.");
    console.log("lowercase is " + lowerCases);

    var upperCases = confirm("Select 'OK' to include uppercase letters in your password.");
    console.log("uppercase is " + upperCases);

    var specialCharacters = confirm("Select 'OK' to include special characters in your password.");
    console.log("specialCharacters is " + specialCharacters);

    if (
        numbers === false &&
        lowerCases === false &&
        upperCases === false &&
        specialCharacters === false
    ) {
        alert('Password criteria must contain at least one character type');
        return;
    }

    //Store users password options
    var passwordOptions = {
        passwordLength: passwordLength,
        numbers: numbers,
        upperCases: upperCases,
        lowerCases: lowerCases,
        specialCharacters: specialCharacters
    };

    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// Password Generator Function based on user's input
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];

    //create new array to store possible types of characters from global arrays based on user input
    var possibleCharacters = [];

    //Push new numeric values to possible list of Characters
    if (options.numbers) {
        possibleCharacters.push.apply(possibleCharacters, numericValue);
    }

    //Push new lower cased characters to possible list of characters
    if (options.lowerCases) {
        possibleCharacters.push.apply(possibleCharacters, lowerCasedLetter);
    }

    //Push new upper cased characters to guanteeredCharacters
    if (options.upperCases) {
        possibleCharacters.push.apply(possibleCharacters, upperCasedLetter);
    }

    //Push new random special characters to guaranteedCharacters
    if (options.specialCharacters) {
        possibleCharacters.push.apply(possibleCharacters, specialCharacterValue);
    }

    for (i = 0; i < options.passwordLength; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
    }

    //String all the characters together
    return result.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);