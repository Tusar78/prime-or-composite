// Input from and Button
let check = document.getElementById("check-btn"),
  inputFilled = document.getElementById("input-text");

// Input Card, Prime card, Composite Card and Neutral Card
let inputBox = document.getElementById("input-box"),
  prime = document.getElementById("prime"),
  composite = document.getElementById("composite"),
  neutral = document.getElementById("neutral");

// Display title text
let primeTitle = document.getElementById("prime-title"),
  compositeTitle = document.getElementById("composite-title"),
  neutralTitle = document.getElementById("neutral-title");

// Get All icon
let icons = document.getElementsByClassName("icon");

// Display None Function
const displayNone = (element) => {
  element.style.display = 'none';
}
// Display Block Function
const displayBlock = (element) => {
  element.style.display = 'block';
}

// Prime checker Function
const isPrimeChecker = () => {
  const userInput = parseInt(inputFilled.value);
  let isPrime = true;

  if (userInput === 1 || userInput === 0) {
    isPrime = false;

    displayNone(inputBox);
    displayNone(composite);
    displayNone(prime);
    displayBlock(neutral);
    neutralTitle.innerText = `${userInput} is prime nor composite`;
  } else if (userInput > 1) {
    for (let i = 2; i < userInput; i++) {
      if (userInput % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      displayNone(inputBox)
      displayNone(composite)
      displayNone(neutral)
      displayBlock(prime)
      primeTitle.innerText = `${userInput} is a prime number`;
    } else {
      displayNone(inputBox)
      displayNone(prime)
      displayNone(neutral)
      displayBlock(composite)
      compositeTitle.innerText = `${userInput} is a composite number`;
    }
  }  
  // Clear Input filled value
  inputFilled.value = "";
};

// Event Listener!
check.addEventListener("click", isPrimeChecker);

for (const icon of icons) {
  icon.addEventListener("click", () => {
    if (icon.src) {
      displayNone(prime);
      displayNone(composite);
      displayNone(neutral);
      displayBlock(inputBox);
    }
  });
}
