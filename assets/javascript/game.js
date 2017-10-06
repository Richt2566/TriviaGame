
// info for the countdown

var clockRunning = false;

var intervalId;


var stopwatch = {
	time: 30,

	reset: function(){

    	stopwatch.time = 30;

    	$("#display").html("00:00");

	},

	start: function() {

		$("#display").html("00:30");
    outOfTime();

		if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
      	
      	clockRunning = true;

      //   if (?? < 1) {
      //     $("#questionarea").html("<div> You ran out of time...</div>")
      //   }

    }
	},

	count: function() {
		stopwatch.time--;

		var converted = stopwatch.timeConverter(stopwatch.time);

    	$("#display").html(converted);

      // if (count === 0) {
      //   $("#questionarea").html("<div> You ran out of time...</div>")
      // }
	},

  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },

	timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

}

// var myVar; 

function outOfTime() {

  setTimeout(what, 30000);

}

function what() {
  $("#display").remove();
  // $("#questionarea").html("<div> You ran out of time...</div>");
  
  // if ($("input[name='q1']:checked").val() &&
  //     $("input[name='q2']:checked").val() &&
  //     $("input[name='q3']:checked").val() &&
  //     $("input[name='q4']:checked").val()) {
  //   clearTimeout(myVar);
  //   console.log("it works");
  // }
  $("#questionarea").html("<div> The correct Answers are:<br> 1: 'a' Natalie Portman<br> 2: 'b' Fight Club<br> 3: 'b' Padmé Amidala<br> 4: 'c' Christopher Lee<br></div>");
  // $("#outcome").html("<p>Your answers are:<br> 1: " + $("input[name='q1']:checked").val()+ 
  //     "<br>2: " + $("input[name='q2']:checked").val() + "<br> 3: " + $("input[name='q3']:checked").val() + 
  //     "<br> 4: " + $("input[name='q4']:checked").val() + "</p>");
  $("#outcome").html("<p> Correct answers: " + rightanswer + "</br> Incorrect answers: " + wronganswer + "<br></p>")

}

//event target closest input radio button (button)

// var count = 12;

// var seeCount;

// function timeWords() {
// 	$("#comments").html("<p></p>");
// }

// function countDown() {
// 	count--
// 	seeCount = setInterval(displayCount, 1000);
// 	if(count === 0) {
// 		count = 12
// 	}
// }

// function displayCount() {
// 	$("#comments").html("<p>" + count + "</p>");
// }


//var timer = setTimeout(timeWords, 30000);

function startTrivia() {
	$("#questionarea").addClass("show");
	console.log("show");
}

// function myCorrect() {
// 	$("#outcome").html("<h2> That is correct</h2>");
// 	console.log("correct");
// }

// function myIncorrect() {
// 	$("#outcome").html("<h2> That is incorrect</h2>");
// 	console.log("incorrect");
// }

//info for the questions


// var ques1 = ($("input[name='q1']:checked").val() != "a");
           
// var ques2 = ($("input[name='q2']:checked").val() != "b");

// var ques3 = ($("input[name='q3']:checked").val() != "b");

// var ques4 = ($("input[name='q4']:checked").val() != "c");

function displayAnswers() {
	$("#questionarea").html("<div> The correct Answers are:<br> 1: 'a' Natalie Portman<br> 2: 'b' Fight Club<br> 3: 'b' Padmé Amidala<br> 4: 'c' Christopher Lee<br></div>");
  // $("#outcome").html("<p>Your answers are:<br> 1: " + $("input[name='q1']:checked").val()+ 
  //     "<br>2: " + $("input[name='q2']:checked").val() + "<br> 3: " + $("input[name='q3']:checked").val() + 
  //     "<br> 4: " + $("input[name='q4']:checked").val() + "</p>");
  $("#outcome").html("<p> Correct answers: " + rightanswer + "</br> Incorrect answers: " + wronganswer + "<br></p>")

}

var rightanswer = 0;
var wronganswer = 0;

function finished() {
	$("#display").remove();

  if ($("input[name='q1']:checked").val() == "a") {
    rightanswer++
  } else {
    wronganswer++
  }

  if ($("input[name='q2']:checked").val() == "b") {
    rightanswer++
  } else {
    wronganswer++
  }

  if ($("input[name='q3']:checked").val() == "b") {
    rightanswer++
  } else {
    wronganswer++
  }

  if ($("input[name='q4']:checked").val() == "b") {
    rightanswer++
  } else {
    wronganswer++
  }
	
	if (!$("input[name='q1']:checked").val() ||
      !$("input[name='q2']:checked").val() ||
      !$("input[name='q3']:checked").val() ||
      !$("input[name='q4']:checked").val()
      ) {
      alert("You're not done yet!");
  } else {
  	displayAnswers();
  }
}

$(document).ready(function(){

	$("#donebutton").click(finished);

	$("#startbutton").click(stopwatch.start);
	
});
