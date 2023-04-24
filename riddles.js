const words=[
    {
        word: "wrong",
        hint: "What word is always spelled wrong?"
    },
    {
        word: "window",
        hint: "What invention lets you look right through a wall?"
    },
    {
        word: "relationship",
        hint: "What kind of ship has two mates but no captain?"
    },
    {
        word: "carpet",
        hint: "It goes up and down the stairs without moving."
    },
    {
        word: "clock",
        hint: "What has hands, but is not flesh, bone or blood?"
    },
    {
        word: "finger",
        hint: "White and thin, red within, with a nail at the end. What is it?"
    },
    {
        word: "hole",
        hint: "The more you take away, the bigger it gets."
    },
    {
        word: "doorbell",
        hint: "What do you answer even though it never asks you questions?"
    },
    {
        word: "nose",
        hint: "I run, yet I have no legs. What am I?"
    },
    {
        word: "stamp",
        hint: "What goes around the world without leaving its corner?"
    },
    {
        word: "table",
        hint: "What has four legs and a body but cannot walk?"
    },
    {
        word: "soap",
        hint: "I can be liquid or solid, sometimes I bubble and you can find me in every home. What am I?"
    },
    {
        word: "stairs",
        hint: "I go up and I go down, sometimes I am curvy and sometimes I am straight. What am I? "
    },
    {
        word: "few",
        hint: "I am a word with letters three. Add two more and less there will be. What word am I? "
    },
    {
        word: "cookie",
        hint: "Kids, elders and a monster love me, I’m mostly round and brown if you ask me. What am I?"
    },
    {
        word: "sponge",
        hint: "What’s full of holes but still holds water?"
    },
    {
        word: "umbrella",
        hint: "What goes up when the rain comes down?"
    },
    {
        word: "plant",
        hint: "What do you bury when it’s alive and dig up when it’s dead?"
    },
    {
        word: "promise",
        hint: "What can you not keep until you give it?"
    },
    {
        word: "noon",
        hint: "What time of day is spelled the same forwards and backwards?"
    },
    {
        word: "blackboard",
        hint: "What’s black when it’s clean and white when it’s dirty?"
    },
    {
        word: "matchstick",
        hint: "My head is red but turns black when you scratch it. What am I?"
    },
    {
        word: "short",
        hint: " What word becomes shorter when you add two letters to it?"
    },
]
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord;
let timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}
const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

function pageRedirect() {
    window.location.replace("Final.html");
  }  
const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) {
        return alert(`Oops! ${userWord} is not a correct word. Continue Playing to clear this round!!`);
        initGame()
    }
    else{
        setTimeout("pageRedirect()",2000);
    }
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);