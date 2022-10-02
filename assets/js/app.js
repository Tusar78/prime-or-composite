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

// Prime checker Function
const isPrimeChecker = () => {
  const userInput = parseInt(inputFilled.value);
  let isPrime = true;

  if (userInput === 1 || userInput === 0) {
    isPrime = false;

    inputBox.style.display = "none";
    composite.style.display = "none";
    prime.style.display = "none";
    neutral.style.display = "block";
    neutralTitle.innerText = `${userInput} is prime nor composite`;
  } else if (userInput > 1) {
    for (let i = 2; i < userInput; i++) {
      if (userInput % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      inputBox.style.display = "none";
      composite.style.display = "none";
      neutral.style.display = "none";
      prime.style.display = "block";
      primeTitle.innerText = `${userInput} is a prime number`;
    } else {
      inputBox.style.display = "none";
      prime.style.display = "none";
      neutral.style.display = "none";
      composite.style.display = "block";
      compositeTitle.innerText = `${userInput} is a composite number`;
    }
  }

  // Clear Input filled value
  inputFilled.value = "";
};

check.addEventListener("click", isPrimeChecker);

for (const icon of icons) {
  icon.addEventListener("click", function () {
    if (icon.src.includes("party")) {
      prime.style.display = "none";
      composite.style.display = "none";
      neutral.style.display = "none";
      inputBox.style.display = "block";
    } else if (icon.src.includes("cool")) {
      composite.style.display = "none";
      neutral.style.display = "none";
      prime.style.display = "none";
      inputBox.style.display = "block";
    } else if (icon.src.includes("info")) {
      neutral.style.display = "none";
      prime.style.display = "none";
      composite.style.display = "none";
      inputBox.style.display = "block";
    }
  });
}
