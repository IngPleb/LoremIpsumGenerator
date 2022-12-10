const LOREM_IPSUM = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';

let generateButton = document.getElementById('generate-button');
let outputTextField = document.getElementById('output-text-field');
let numberOfParagraphs = document.getElementById('number-of-paragraphs');

let isInputValid = function() {
    return numberOfParagraphs.value > 0;
}

let generateOutput = function(numberOfParagraphs) {
    let output = "";
    for (let i = 0; i < numberOfParagraphs; i++) {
        output += LOREM_IPSUM;
    }

    // Easter egg
    // If the number of paragraphs is 42, then the output is the answer to life, the universe, and everything
    if (42 == numberOfParagraphs) {
        output = '<p>42 is the answer</p>';
    }

    return output;
}

generateButton.addEventListener('click', function() {
    let numberOfParagraphsValue = numberOfParagraphs.value;

    if (!isInputValid()) {
        alert('Please enter a valid number of paragraphs!');
        return;
    }

    outputTextField.innerHTML = generateOutput(numberOfParagraphsValue);
});