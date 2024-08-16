// Letters 
const letters = "اأبتثجحخدذرزسشصضطظعغفقكلمنهويى"
// const letters = "qwertyuiopasdfghjklzxcvbnm"

// Get Array From Letters
let lettersArray = Array.from(letters)

// Select Letters Container 
let lettersContainer = document.querySelector(".letters")

// Generate Letters  
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter)

  //Append The Letter To Span 
  span.appendChild(theLetter)

  // Add Class To Span
  span.className = 'letter-box'

  // Append Span To The Letters Container
  lettersContainer.appendChild(span)
})

// Object Of Words + Categories
const words = {
  // programming : ['php','javascript','go','fortran','r','mysql','python'],
  لاعيبةكورة: ['كريستيانو رونالدو','ميسي','محمد صلاح','زيزو','افشه','الشيناوي','زيدان'],
  افلام: ['المصلحه','بنات العم','سمير و شهير و بهير','الحرب العالميه التالته','ولاد رزق','بيت الروبي','عسل اسود','تيمور و شفيقه','صعيدي في الجامعه الامريكيه','الفيل الازرق','نادي الراجال السري','وقفة رجالة','الخليه'],
  ممثلين: ['االسقا','مني شلبى','أسماء جلال','مني ذكى','حلمي',' هنيدي','كريم عبدالعزىز'],
  بلاد: ['البحرين','السعوديه','تونس','سوريا','اليمن','يأبان','كوريا','أمريكا','أيطالىا','فرنسا','روسيا','الهند','الصين','قطر','مصر'],
}

// Get Random Property
let allKeys = Object.keys(words)

// Number Depend On keys Length
let randomNumber = Math.floor(Math.random() * allKeys.length)

// Category
let randomName = allKeys[randomNumber];

// Category Words
let randomValue = words[randomName]

//  Random Number Depend From On Words
let randomValueNumber = Math.floor(Math.random() * randomValue.length);


// The Chosen Word
let randomValueName = randomValue[randomValueNumber];


// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomName;


// Select Letters Guess Element
let letterGuess = document.querySelector(".letter-guess");

// convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueName)

// Create Span Depend On Letters
lettersAndSpace.forEach(letter => {

  // Create Empty Span 
  let emptySpan = document.createElement('span')

  // If Letter Is Space 
  if (letter === ' '){

    // Add Class To Span 
    emptySpan.className = 'has-space'
  }

  // Append Span To The LetterGuess
  letterGuess.appendChild(emptySpan)
})

// Select Guess Span 
let guessSpan = document.querySelectorAll(".letter-guess span");

// Set Wrong Attempts
let wrongAttempts = 0
let rightAttempts = 0
// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw")



//Handle Clicking On Letter
document.addEventListener("click",(e) => {

  // Set The Chose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chose Word
    let theChosenWord = Array.from(randomValueName);

    theChosenWord.forEach((wordLetter, wordIndex) => {
      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter === wordLetter) {
        // Status To Correct
        theStatus = true;

        // loop on all guess Spans
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    // Outside Loop

    // congratulation Game End

    // If Chosen letter right
    if (theStatus === true) {

      // Increase The Right Attempts
      rightAttempts++;
    }

    if (rightAttempts === guessSpan.length) {
      // congratulation Game Function
      rightChose();

      document.getElementById("success").play();
    }

    // If Chosen letter wrong
    if (theStatus !== true) {

      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong on The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Wrong Sound
      document.getElementById("wrong").play();

      // Check letter Wrong
      if (wrongAttempts === 8) {
        // End Game Function
        endGame();

        lettersContainer.classList.add("finished");
      }
    } else {
      // Play right sound
      document.getElementById("right").play();
    }
  }
})

// End Game Function 
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(
    `Game Over , The Word Is
    ( ${randomValueName} )`
  );

  // Append Text To Div
  div.appendChild(divText);
  
  // Add Class To Div 
  div.className = "popup"

  // Append To Body
  document.body.append(div);
}

// Right Chose Function
function rightChose() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(
    `WoooW It's Amazing, The Word Is 
    (${randomValueName})`
  );

  // Append Text To Div
  div.appendChild(divText);

  // Add Class To Div
  div.className = "popup";

  // Append To Body
  document.body.append(div);
}


// the chose word is 
console.log(randomValueName);

