'use strict';
const allQuestions = [
{
 Question: 1,
  text: `1) Which piece of legislation did <i>not</i> contribute to the increasing resentment felt by the colonists towards the English parliament and crown?`,
 answer1: `The Stamp Act`,
 answer2: `The Tea Act`,
 answer3: `The Corn Laws`,
 answer4: `The Townsend Tariffs`,
 correctanswer: `The Corn Laws`
},
{
 Question: 2,
 text: `2) When did the first continental congress convene?`,
 answer1: `1770`,
 answer2: `1774`,
 answer3: `1772`,
 answer4: `1776`,
 correctanswer: `1774`
},
{
 Question: 3,
 text: `3) Where was the Declaration of Independence signed?`,
 answer1: `Philadelphia`,
 answer2: `Boston`,
 answer3: `Trenton`,
 answer4: `Washington`,
 correctanswer: `Philadelphia`
},
{
 Question: 4,
 text: `4) Which philosopher inspired Thomas Jefferson and the founding fathers to include the famous unalienable rights of life, liberty, and the pursuit of happiness?`,
 answer1: `Thomas Hobbes`,
 answer2: `John Locke`,
 answer3: `David Hume`,
 answer4: `Francis Bacon`,
 correctanswer: `John Locke`
},
{
Question: 5,
text: `5) Which military confrontation is largely considered to be the first of the American Revolution?`,
answer1: `The Battles of Lexington and Concord`,
answer2: `The Battle of Bunker Hill`,
answer3: `The Battle of Saratoga`,
answer4: `The Battle of Trenton`,
correctanswer: `The Battles of Lexington and Concord`
},
{
 Question: 6,
 text: `6) Which country became an ally to the United States during the American Revolution?`,
 answer1: `Italy`,
 answer2: `Spain`,
 answer3: `France`,
 answer4: `Russia`,
 correctanswer: `France`
},
{
 Question: 7,
 text: `7) Which famous patriot said: "Give me liberty, or give me Death!"`,
 answer1: `Paul Revere`,
 answer2: `Thomas Jefferson`,
 answer3: `James Madison`,
 answer4: `Patrick Henry`,
 correctanswer: `Patrick Henry`
},
{
 Question: 8,
 text: `8) At the battle of Yorktown, Washington received the surrender of which British army officer?`,
 answer1: `Benedict Arnold`,
 answer2: `Charles Cornwallis`,
 answer3: `John Burgoyne`,
 answer4: `Henry Clinton`,
 correctanswer: `Charles Cornwallis`
},
{
 Question: 9,
 text: `9) Which was <i>not</i> a problem the colonies experienced with the first American constitution known as the Articles of Confederation?`,
 answer1: `Lack of a national judiciary to interpret law`,
 answer2: `No chief executive`,
 answer3: `No congress was established`,
 answer4: `No national army was created`,
 correctanswer: `No congress was established`
},
{
 Question: 10,
 text: `10) Who was the first Vice President?`,
 answer1: `John Adams`,
 answer2: `George Washington`,
 answer3: `Benjamin Franklin`,
 answer4: `Alexander Hamilton`,
 correctanswer: `John Adams`
}
];

const answerExplanations = [
  `The answer is the Corn Laws. These were trade isolationist tariffs implemented by England in the early to mid-1800s in order to protect domestic farmers from lower priced competitors abroad. This mainly angered the British living on the mainland!`, 
  `The first American congress convened in 1774, a few years before the Declaration of Independence`, 
  `Philadelphia was where the Declaration of Independence was created and signed, it also temporarily served as the nation's capital.`,
  `The English philosopher John Locke considered life, liberty, and the pursuit of property to be the fundamental rights that a government should protect for its people. The founding fathers were later inspired by this, incorporating slightly altered ideals in the Declaration of Independence.`,
  `The Battles of Lexington and Concord are considered to be the first major confrontations.`,
  `In an effort to undermine their longtime rivals, France joined the side of the patriots against the British.`,
  `Patrick Henry said these famous words at the Second Virginia Convention.`,
  `With the surrender of Charles Cornwallis, the battle of Yorktown effectively marked the end of the Revolutionary War.`,
  `A congress was established and had been for some time as the congress between the 13 colonies was what the Articles of Confederation depended on.`,
  `The first Vice President was John Adams. He eventually became the second President of the United States after George Washington. `
  ];

//initiates quiz
function startButton() {
$('#js-start-button').click(function(event){
  moveToNext();
});
}







// i will represent which item in allQuestions array we are on
let i = -1;

//page where questions will be displayed.
function questionPage(allQuestions) {
 i <= -1, i++;
  return `
<section id="answer-area" role="region">
<form id="answers-displayed" role="form">
<fieldset>
    <legend id="question-area">${allQuestions[i].text}</legend>
			<input type="radio" name="option" class="choices" value="${allQuestions[i].answer1}" checked>
			<span>
			${allQuestions[i].answer1}
			</span>
			</input>
			</br>
			<input type="radio" name="option" class="choices" value="${allQuestions[i].answer2}">
			<span>
			${allQuestions[i].answer2}
			</span>
			</input>
			</br>
			<input type="radio" name="option" class="choices" value="${allQuestions[i].answer3}">
			<span>
			${allQuestions[i].answer3}
			</span>
			</input>
			</br>
			<input type="radio" name="option" class="choices" value="${allQuestions[i].answer4}">
			<span>
			${allQuestions[i].answer4}
			</span>
			</input>
			</br>
			</fieldset>
			<button id="check-answer" input type="submit">Check Answer</button>
			<p id="answered-right-total">Correct Answers: ${correctAnswerScore}/10</p>
		</form>
		</section>`;
}

//will input questionPage in #quiz-section
function moveToNext() {
  $('#quiz-section').html(questionPage(allQuestions));
}


//will assess if user answer is right
function checkAnswerButton() {
  $('#quiz-section').on("click", "#check-answer", function(event){
   let selected = $('input:checked');
    let answerchosen = selected.val();
    let correctAnswer = `${allQuestions[i].correctanswer}`;
    if (answerchosen === correctAnswer) {
    rightTemplate();
 }
 else
 {
    wrongTemplate();
   }
  });
}




	
//will put feedbackPageWrong(); in #quiz-section
 function wrongTemplate () {	
  $('#quiz-section').html(feedbackPageWrong(answerExplanations));
}

//will display when user answer is wrong
function feedbackPageWrong (answerExplanations) {
return `
<section role="region">
<h3>That's Incorrect</h3>
<p id="explanation">${answerExplanations[i]}</p>
<button id="continue-button">Continue</button>
</section>`;
}

//will put feedbackPageRight(); in #quiz-section when user is right.
function rightTemplate() {
  $('#quiz-section').html(feedbackPageRight());
}

//This variable will keep track of correct answers
let correctAnswerScore = 0;

//This will appear when user is right. Also will change correctAnswerScore variable each time the code is run.
function feedbackPageRight () {
  correctAnswerScore <= -1, correctAnswerScore++;
return `
<section id="right-page" role="region">
<h3>That's Correct!</h3>
<p id="correct-paragraph">You know your history! Keep it up!</p>
<button id="continue-button">Continue</button>`;
}


//will allow users to go on to next question or once last question is completed, will move to finalTemplate. 
function continueButton () {
$('#quiz-section').on("click", "#continue-button", function(event){
  if (i >= 9) {
  finalTemplate();
  }
  else {
    moveToNext();
  }
  }); 
}

//This will put finalPage(); into #quiz-section.
function finalTemplate () {	
  $('#quiz-section').html(finalPage());
}

//will display as last page.
function finalPage () {
  return `
  <section role="region">
  <h3>Congratulations!</h3>
  <p id="end">You have completed the quiz.</br>Hope you enjoyed learning a little bit more about your country's history!</p>
  </br>
  <p id="final-score">Final Score: ${correctAnswerScore}/10</p>
  <button id="restart-button">Restart Quiz</button>
  `;
}

//This function will reset quiz for the user.
function restartQuizButton () {
  $('#quiz-section').on("click", "#restart-button", function(event) {
    location.reload();
 });
}

//keeps track of and allows users to use all buttons.
function quizButtons() {
  startButton();
  checkAnswerButton();
  continueButton();
  restartQuizButton();
}

//runs quizButtons(); function
quizButtons();