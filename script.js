const compareWordsBtn = document.querySelector('#words');
const compareCharsBtn = document.querySelector('#char');
const matchBtn = document.querySelector('#match');

const leftJoke = document.querySelector('#left-jokes p');
const rightJoke = document.querySelector('#right-jokes p');

const buttonWrapper = document.querySelector('#button-wrapper');
const resultDisplay = document.createElement('div');
resultDisplay.style.marginTop = '1rem';
resultDisplay.style.fontWeight = 'bold';
buttonWrapper.appendChild(resultDisplay);

// Compare words
compareWordsBtn.addEventListener('click', () => {
    const leftWords = leftJoke.textContent.trim().split(/\s+/).length;
    const rightWords = rightJoke.textContent.trim().split(/\s+/).length;

    if (leftWords > rightWords) {
        resultDisplay.textContent = `Left joke has more words (${leftWords} vs ${rightWords})`;
    } else if (rightWords > leftWords) {
        resultDisplay.textContent = `Right joke has more words (${rightWords} vs ${leftWords})`;
    } else {
        resultDisplay.textContent = `Both jokes have the same number of words (${leftWords})`;
    }
});

// Compare characters
compareCharsBtn.addEventListener('click', () => {
    const leftChars = leftJoke.textContent.replace(/\s/g, '').length;
    const rightChars = rightJoke.textContent.replace(/\s/g, '').length;

    if (leftChars > rightChars) {
        resultDisplay.textContent = `Left joke has more characters (${leftChars} vs ${rightChars})`;
    } else if (rightChars > leftChars) {
        resultDisplay.textContent = `Right joke has more characters (${rightChars} vs ${leftChars})`;
    } else {
        resultDisplay.textContent = `Both jokes have the same number of characters (${leftChars})`;
    }
});

// Match first word
matchBtn.addEventListener('click', () => {
    const leftFirstWord = leftJoke.textContent.trim().split(/\s+/)[0].toLowerCase();
    const rightFirstWord = rightJoke.textContent.trim().split(/\s+/)[0].toLowerCase();

    if (leftFirstWord === rightFirstWord) {
        resultDisplay.textContent = `First words match: "${leftFirstWord}"`;
    } else {
        resultDisplay.textContent = `First words do NOT match ("${leftFirstWord}" vs "${rightFirstWord}")`;
    }
});
