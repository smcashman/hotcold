
$(document).ready(function(){
	newGame();

	function newGame() {
		guessThis = Math.floor(Math.random()*(100-1)+1);
		console.log(guessThis);
		counter = 0;
		$("span#count").html("0");

		$("h2#feedback").html("Make your guess!");
		$("ul#guessList").html("");
	}

	$("a.new").click(function(){
		newGame();
	})
	

	$("#guessButton").click(function(){
		var numberGuessed = $("#userGuess").val();
		if (isNaN(numberGuessed)) {
			$("h2#feedback").html("Please enter a number");
			return false;

		}

		if (numberGuessed > 100 || numberGuessed < 1 ) {
			$("h2#feedback").html("Enter a number between 1 and 100");
			return false;

		}

		if (guessThis < numberGuessed) {
			var difference = (numberGuessed - guessThis);
		}
			
		else if (guessThis > numberGuessed) {
			var difference = (guessThis - numberGuessed);

		}

		console.log(difference);



		feedBack = function(integer) {

		if (numberGuessed == guessThis) {
			$("h2#feedback").html("Why hello, Miss Cleo!");
		}

		if (difference >=1 && difference < 5) {
			$("h2#feedback").html("the bowels of hell");
		}
		if (difference >= 5 && difference < 10) {
			$("h2#feedback").html("july heat wave, no AC");
		}
		if (difference >= 10 && difference < 20) {
			$("h2#feedback").html("the first sunny day in may");
		}
		if (difference >= 20 && difference < 40){
			$("h2#feedback").html("fall evenings with crunchy leaves");
		}
		if (difference >=40 && difference < 60){
			$("h2#feedback").html("stepping out of the shower in the winter")
		}
		if (difference > 60) {
			$("h2#feedback").html("Bacteria frozen in an Antarctic ice shelf");
		}

	}

	feedBack(numberGuessed);

		counter++;
		$("span#count").html(counter);

		$("#userGuess").val("").focus();

		$("#guessList").append("<li>"+numberGuessed+"</li>");

	})
	$(document).keydown(function(e){
		if (e.keyCode==13){
			$("#guessButton").click();
		}
	})
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


