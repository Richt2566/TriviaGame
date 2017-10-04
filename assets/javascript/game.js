
var count = 12;

var seeCount;

var timer = setTimeout(timeWords, 30000);

function myCorrect() {
	$("#outcome").html("<h2> That is correct</h2>");
	console.log("correct");
}

function myIncorrect() {
	$("#outcome").html("<h2> That is incorrect</h2>");
	console.log("incorrect");
}

function timeWords() {
	$("#comments").html("<p></p>");

}

function countDown() {
	count--
	seeCount = setInterval(displayCount, 1000);
	if(count === 0) {
		count = 12
	}

}

function displayCount() {
	$("#comments").html("<p>" + count + "</p>");
}

function displayAnswers() {
	$("#questionarea").html("<div> The correct Answers are: </div>")
}

function finished() {
	

	if (!$("input[name='q1']:checked").val() ||
      !$("input[name='q2']:checked").val() ||
      !$("input[name='q3']:checked").val() ||
      !$("input[name='q4']:checked").val()
      ) {
      alert("You're not done yet!");
  } else {
  	alert("nice!");
  	displayAnswers();
  }

}

var ques1 = ($("input[name='q1']:checked").val() != "a"); 
           
var ques2 = ($("input[name='q2']:checked").val() != "b");  

var ques3 = ($("input[name='q3']:checked").val() != "c");  

var ques4 = ($("input[name='q4']:checked").val() != "d"); 

$(document).ready(function(){
	displayCount();

	$("#donebutton").click(finished);
	
});
