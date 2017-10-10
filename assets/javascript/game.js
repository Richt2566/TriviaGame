
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
    $("#questionarea").addClass("show");

		if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
      	
      	clockRunning = true;
    }
	},

	count: function() {
		stopwatch.time--;

		var converted = stopwatch.timeConverter(stopwatch.time);

    	$("#display").html(converted);
	},

  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
    stopTime();

  },

	timeConverter: function(t) {

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

var myVar;

function outOfTime() {

myVar = setTimeout(what, 30000);

}

function stopTime() {
  clearTimeout(myVar);
}

function what() {
  $("#display").remove();
  $("#startbutton").remove();
  $("#timesup").html("<div> You ran out of time...</div>");

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

  if ($("input[name='q4']:checked").val() == "c") {
    rightanswer++
  } else {
    wronganswer++
  }
  
  $("#questionarea").html("<div> The correct Answers are:<br> 1: 'a' Natalie Portman<br> 2: 'b' Fight Club<br> 3: 'b' Padmé Amidala<br> 4: 'c' Christopher Lee<br></div>");
  $("#outcome").html("<p> Correct answers: " + rightanswer + "</br> Incorrect answers: " + wronganswer + "<br></p>")

  $("#donebutton").remove();
  $("#nextbutton").addClass("show");
}

function startTrivia() {
	$("#questionarea").addClass("show");
	console.log("show");
}

function displayAnswers() {
	$("#questionarea").html("<div> The correct Answers are:<br> 1: 'a' Natalie Portman<br> 2: 'b' Fight Club<br> 3: 'b' Padmé Amidala<br> 4: 'c' Christopher Lee<br></div>");
  $("#outcome").html("<p> Correct answers: " + rightanswer + "</br> Incorrect answers: " + wronganswer + "<br></p>")

}

var rightanswer = 0;
var wronganswer = 0;

function finished() {
  clearTimeout(what);
  stopTime();
	
	if (!$("input[name='q1']:checked").val() ||
      !$("input[name='q2']:checked").val() ||
      !$("input[name='q3']:checked").val() ||
      !$("input[name='q4']:checked").val()
      ) {
      alert("You're not done yet!");
  } else {

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

  if ($("input[name='q4']:checked").val() == "c") {
    rightanswer++

  } else {
    wronganswer++
  }

    displayAnswers();
    $("#display").remove();
    $("#startbutton").remove();
    $("#donebutton").remove();
    $("#nextbutton").addClass("show");
    }
}

function refreshPage(){
    window.location.reload();
}

$(document).ready(function(){

	$("#donebutton").click(finished);

	$("#startbutton").click(stopwatch.start);

  $("#nextbutton").click(refreshPage);
	
});
