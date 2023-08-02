const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_+-=?/";

// Selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
const copiedPara = document.getElementById('copied');

document.getElementById("copy").addEventListener("click", function(){
    if(navigator.clipboard){
        if (passBox !== null) {
            navigator.clipboard.writeText(passBox.textContent);
            console.log("Copied Successfully!");
            copiedPara.style.display = "block";
            setTimeout(() => {
                copiedPara.style.display = "none";
            }, 1500);
        }
    }
    else{
        console.log("Browser error in copying the password!");
    }
})

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    let passed = truncateString(password, totalChar.value);
    passBox.textContent = shuffle(passed);
}

setTimeout(generatePassword, 2500);

document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}

let shuffle = (s) => {
    let str = s.split('')
        .sort(() => 0.5 - Math.random())
        .join('');

    // show shuffled characters.
    // console.log(str);
    return str;
}