// working on event listeners.
var firstDiv = document.getElementById('firstBodyDiv');
var CookieQuestion = document.getElementById('ask');
var choiceP = document.getElementById('ask');

CookieQuestion.addEventListener('click', function() {
  firstDiv.document.getElementById('ask').innerHTML = 'Great, we can help! Salmon is rich in nutrition. We make it easy to get all that health goodness into a food vehicle you\'ll want to eat.';});

function changeText() {
  CookieQuestion.textContent = CookieQuestion.textContent += 'Great, we can help! Salmon is rich in nutrition. We make it easy to get all that health goodness into a food vehicle you\'ll want to eat.';

};
changeText();
