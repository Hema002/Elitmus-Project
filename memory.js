const questions=[
  {
    question:"Which of the following animals is not present in the picture?",
    answers:[
      {text:"Rabbit",correct:false },
      {text:"Penguin",correct:false },
      {text:"Squirrel",correct:false },
      {text:"Cat",correct:true }
    ]
  },
  {
    question:"How many boats are present in the picture?",
    answers:[
      {text:"1",correct:true },
      {text:"2",correct:false },
      {text:"3",correct:false },
      {text:"4",correct:false }
    ]
  },
  {
    question:"Which of the following food item is not present in the picture?",
    answers:[
      {text:"apple",correct:false },
      {text:"cake",correct:true },
      {text:"ice-cream",correct:false },
      {text:"watermelon",correct:false }
    ]
  }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;

function startQuiz(){
  currentQuestionIndex=0;
  nextButton.innerHTML="Next";
  showQuestion();
}
//displays questions and options
function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+"."+currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer)
  });
}

function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);

  }
}
function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect =selectedBtn.dataset.correct=="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  }
  else{
    selectedBtn.classList.add("incorrect")
    window.location.replace("index.html");
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}
function pageRedirect() {
  window.location.replace("riddles.html");
}   
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }
  else{
    nextButton.innerHTML="Proceed to Next Section";   
  setTimeout("pageRedirect()",2000);
  }
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }
})
startQuiz();
