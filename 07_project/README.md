# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button")
 const body = document.querySelector("body")

 buttons.forEach(function (button) {
   console.log(button)
   button.addEventListener('click' , function(e){
     console.log(e)
     console.log(e.target.id)
    
    //// using if /////
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id
    // }
     
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = e.target.id
    // }
     
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id
    // }
     
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id
    // }
 
     ////////
     // using switch case////
    switch (e.target.id){
      case 'grey':
      body.style.backgroundColor = e.target.id
      break
      case 'white':
      body.style.backgroundColor = e.target.id
      break
      case 'blue':
      body.style.backgroundColor = e.target.id
      break
      case 'yellow':
      body.style.backgroundColor = e.target.id
      break
    }

   })
 })

```

## project 2 solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const resultMessage = document.querySelector("#resultsMessage");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please provide a valid height.";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    
    if (bmi < 18.6) {
      resultMessage.innerHTML = `<span>Your BMI is: ${bmi} and you are underweight.</span>`;
    } else if (bmi > 24.9) {
      resultMessage.innerHTML = `<span>Your BMI is: ${bmi} and you are overweight.</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      resultMessage.innerHTML = `<span>Your BMI is: ${bmi} and you are a fit person.</span>`;
    }
  }
});



```

## project 3 solution code

```javascript
 const clock = document.getElementById("clock")

 const digitalTime = setInterval(function(){
   const DATE = new Date
   clock.innerHTML = DATE.toLocaleTimeString()
 } , 1000) // here 1000 =  1second




```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript


// generate random color
 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function backgroundcolorchange(){
  document.body.style.backgroundColor = getRandomColor()
}
let intervalid 
document.querySelector('#start').addEventListener('click', () =>{
  // intervalid = setInterval(backgroundcolorchange,500)
  if(intervalid == null){                           // for sefty check
    intervalid = setInterval(backgroundcolorchange,500)
  }
})
document.querySelector('#stop').addEventListener('click', () =>{
  clearInterval(intervalid)
  intervalid = null
  console.log(intervalid)
})
```