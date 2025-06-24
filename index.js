const asciiChar = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
  107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
  122,
];
const asciiSym = [
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61,
  62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126,
];
const asciiNum = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

let passwordDisplay1 = document.getElementById("password-display-1");
let passwordDisplay2 = document.getElementById("password-display-2");

let passwordLength = document.getElementById("length");
let includeNumbers = document.getElementById("numbers");
let includeSymbols = document.getElementById("symbols");

const generatePassword = () => {
  for (let i = 0; i < 2; i++) {
    let password = [];
    const characterPool = [...asciiChar];
    if (includeNumbers.checked) {
      characterPool.push(...asciiNum);
    }
    if (includeSymbols.checked) {
      characterPool.push(...asciiSym);
    }
    for (let i = 0; i < passwordLength.value; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password.push(characterPool[randomIndex]);
    }
    if (i === 0) {
      passwordDisplay1.textContent = String.fromCharCode(...password);
    } else {
      passwordDisplay2.textContent = String.fromCharCode(...password);
    }
  }
};

const copyFirstPassword = () => {
  navigator.clipboard.writeText(passwordDisplay1.textContent);
  alert("Password copied to clipboard");
};

const copySecondPassword = () => {
  navigator.clipboard.writeText(passwordDisplay2.textContent);
  alert("Password copied to clipboard");
};
