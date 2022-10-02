// Initialize Variables
let inputFilled = document.getElementById("input-box"),
  check = document.getElementById("prime-btn"),
  inputPrime = document.getElementById("prime-input"),
  prime = document.getElementById("prime"),
  composite = document.getElementById("composite"),
  neutral = document.getElementById("neutral"),
  primeText = document.getElementById("prime-text"),
  compositeText = document.getElementById("composite-text"),
  neutralText = document.getElementById("neutral-text");


const isPrime = () => {
  const userInput = parseInt(inputFilled.value);
  let isPrime = true;
  if (userInput === 1 || userInput === 0) {
    isPrime = false;
    inputPrime.style.display = "none";
    composite.style.display = "none";
    prime.style.display = "none";
    neutral.style.display = "block";    
    neutralText.innerText = `${userInput} is prime nor composite`;
  } else if (userInput > 1) {
    for (let i = 2; i < userInput; i++) {
      if (userInput % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      inputPrime.style.display = "none";
      composite.style.display = "none";
      neutral.style.display = 'none';
      // prime.style.display = "block";
      prime.style.transform = "scale(1)";
      primeText.innerText = `${userInput} is Prime number`;
    } else {
      inputPrime.style.display = "none";
      prime.style.display = "none";
      neutral.style.display = 'none';
      composite.style.display = "block";
      compositeText.innerText = `${userInput} is Composite number`;
    }
  }

  inputFilled.value = '';
};

check.addEventListener("click", isPrime);


const primeIcons = document.getElementsByClassName('prime__icon');
for (const icon of primeIcons) {
  icon.addEventListener('click', function() {
    if (icon.src.includes('party')) {
      prime.style.display = 'none';
      composite.style.display = 'none';
      neutral.style.display = 'none';
      inputPrime.style.display = "block";
      inputPrime.style.transform = "scale(1)";
    } else if (icon.src.includes('sad')) {
      composite.style.display = 'none';
      prime.style.display = 'none';
      neutral.style.display = 'none';
      inputPrime.style.display = "block";
    } else if (icon.src.includes('info')) {
      composite.style.display = 'none';
      prime.style.display = 'none';
      neutral.style.display = 'none';
      inputPrime.style.display = "block";
    }
  })
}