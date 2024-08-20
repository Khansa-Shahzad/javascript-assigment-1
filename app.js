// Get the user's first name  
let firstName = prompt("Please enter your first name:");  

// Get the user's last name  
let lastName = prompt("Please enter your last name:");  

// Merge first name and last name into fullName  
let fullName = firstName + " " + lastName;  

// Greet the user with their full name  
alert("Hello, " + fullName + "!");

function getPhoneModel() {  
    // Get user input for favorite mobile phone model  
    let phoneModel = prompt("Please enter your favorite mobile phone model:");  

    // Find the length of the user input  
    let modelLength = phoneModel.length;  

    // Display the length in an alert  
    alert("The length of your favorite mobile phone model is: " + modelLength + " characters.");  
}  

function findIndexOfLetter() {  
    // Define the word  
    const word = "Pakistani";  

    // Find the index of letter "n"  
    const index = word.indexOf("n");  

    // Display the result in an alert  
    alert("The index of the letter 'n' in the word 'Pakistani' is: " + index);  
}  

function findIndexOfLetter() {  
    // Define the word  
  const word = "Pakistani";  

    // Find the index of letter "n"  
    const index = word.indexOf("n");  

    // Display the result in an alert  
    alert("The index of the letter 'n' in the word 'Pakistani' is: " + index);  
}  

function findLastIndexOfLetter() {  
    // Define the phrase  
    const phrase = "Hello World";  

    // Find the last index of letter "l"  
    const lastIndex = phrase.lastIndexOf("l");  

    // Display the result in an alert  
    alert("The last index of the letter 'l' in the phrase 'Hello World' is: " + lastIndex);  
}  

// The word to search  
const word = "Pakistani";  

// Finding the character at the 3rd index  
const characterAtIndex3 = word.charAt(3);//  or word[3]  

// Displaying the result  
document.getElementById("result").innerText = `The character at index 3 is: ${characterAtIndex3}`; 

 function replaceWord() {
     //Original word
    var originalWord = "Hyderabad";
   //  Replace "Hyder" with "Islam"
    var newWord = originalWord.replace("Hyder", "Islam");
     //Display the result
    document.getElementById("result").innerText = newWord;
}

function replaceWord() {
    // Original message
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    // Replace all occurrences of "and" with "&"
    var newMessage = message.replace(/and/g, "&");
    // Display the result
   document.getElementById("result").innerText = newMessage;

    function convertStringToNumber() {
        // String "472"
        var stringNumber = "472";

        // Convert string to number
        var numberValue = parseInt(stringNumber);

        // Display values and types in browser
       var resultElement = document.getElementById("result");
       // resultElement.innerHTML = "<p>Original String: " + stringNumber + "</p>";
        resultElement.innerHTML += "<p>Converted Number: " + numberValue + "</p>";
      //  resultElement.innerHTML += "<p>Type of String: " + typeof stringNumber + "</p>";
        resultElement.innerHTML += "<p>Type of Converted Number: " + typeof numberValue + "</p>";
     }

        function convertToUppercase() { 
            // Get user input value
            var userInput = document.getElementById("userInput").value;

            // Convert input to uppercase
            var uppercaseInput = userInput.toUpperCase();

            // Display the result
            document.getElementById("result").innerText = uppercaseInput;
         }

        function guessNumber() {
            // Generate a random secret number between 1 and 10
            var secretNumber = Math.floor(Math.random() * 10) + 1;

            // Get user input
            var userInput = parseInt(document.getElementById("userInput").value);

            // Check if user input equals the secret number
            if (userInput === secretNumber) {
                document.getElementById("result").innerText = "Congratulations! You guessed the correct number.";
            } else {
                document.getElementById("result").innerText = "Sorry, the correct number was " + secretNumber + ". Try again!";
            }
        }

        function displayWeight() {
            // Get user input
            var userInput = document.getElementById("weightInput").value.trim();

            // Parse the user input to extract the weight
            var weight;
            if (userInput.match(/^\d+(\.\d+)?$/)) {
                weight = parseFloat(userInput); // For simple numbers like 72 or 72.5
            } else if (userInput.match(/^\d+(\.\d+)?\s*(kg|lbs)$/i)) {
                var parts = userInput.split(/\s+/);
                weight = parseFloat(parts[0]); // Extract the numeric part
            } else {
                alert("Invalid input format. Please enter a valid weight (e.g., 72, 72.5, 72 kg, 72.5 lbs).");
                return;
            }
             // Display the result
             document.getElementById("result").innerText = "Your weight is: " + weight + " kg";
            }

            function generateRandomNumber() {
                // Generate a random number between 1 and 100
                var randomNumber = Math.floor(Math.random() * 100) + 1;
                
                // Display the random number in the browser
                document.getElementById("result").innerText = "Random Number: " + randomNumber;
            }

            function coinToss() {
                // Generate a random number between 0 and 1
                var randomNum = Math.random();
                
                // Determine the result based on the random number
                var coinResult;
                if (randomNum < 0.5) {
                    coinResult = "Heads";
                } else {
                    coinResult = "Tails";
                }
                
                // Display the result in the browser
                document.getElementById("result").innerText = "Coin Result: " + coinResult;
            }

            function rollDice() {
                // Generate a random number between 1 and 6 (inclusive)
                var diceRoll = Math.floor(Math.random() * 6) + 1;
                
                // Display the result in the diceValue element
                document.getElementById("diceValue").innerText = diceRoll;
              }

              function calculateAbsolute() {
                // Get the input value
                var inputNumber = document.getElementById("number").value;
          
                // Calculate the absolute value
                var absoluteValue = Math.abs(parseFloat(inputNumber)); // Convert to float in case of decimal input
          
                // Display the result
                document.getElementById("result").innerText = `Absolute value: ${absoluteValue}`;
              }

              function displayNumber() {
                // Get the input value
                var inputNumber = parseFloat(document.getElementById("number").value);
          
                // Check if the input is a negative floating point number
                if (inputNumber < 0) {
                  // Display the valid negative number
                  document.getElementById("result").innerText = `Number: ${inputNumber}`;
                  document.getElementById("result").className = "result valid"; // Change class for valid output
                } else {
                  // Display an error message
                  document.getElementById("result").innerText = "Please enter a negative floating point number.";
                  document.getElementById("result").className = "result"; // Reset class for error output
                }
              }

              function displayNumber() {
                // Get the input value
                var inputNumber = parseInt(document.getElementById("number").value);
          
                // Check if the input is a positive integer
                if (inputNumber > 0) {
                  // Display the valid positive number
                  document.getElementById("result").innerText = `Number: ${inputNumber}`;
                  document.getElementById("result").className = "result valid"; // Change class for valid output
                } else {
                  // Display an error message
                  document.getElementById("result").innerText = "Please enter a positive integer.";
                  document.getElementById("result").className = "result"; // Reset class for error output
                }
              }