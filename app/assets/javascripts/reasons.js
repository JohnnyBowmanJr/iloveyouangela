$(document).ready(function() {
	reasons = ["Because you support me in everything I do.",
								"Because you're there to talk to when I need you most",
								"Because your french toast is still the best",
								"Because most of my clothes are still ones you've picked out for me",
								"Because you always have my back",
								"Because just think what my manners would have been without you",
								"Because your genes just keep on keepin me skinny",
								"Because of all the piano lessons, tennis lessons, drum lessons, and life lessons that've made me who I am",
								"Because I secretly love the ballet"
								];

	buttonText = ["Obviously",
								"I knew that",
								"Well I suppose so",
								"Keep it coming",
								"Mmmmmmhhhmmmm"
								];

	var randomReason = Math.floor(Math.random() * reasons.length);
	var randombuttonText = Math.floor(Math.random() * buttonText.length);
	$('#reason').append(reasons[randomReason]);
	$('button#inquire').append(buttonText[randombuttonText]);

	$('body').on("click", "#inquire", function() {
		var randomReason = Math.floor(Math.random() * reasons.length);
		var randombuttonText = Math.floor(Math.random() * buttonText.length);
		$('#reason').replaceWith("<div id='reason'>" + reasons[randomReason] + "</div>");
		$('button#inquire').replaceWith("<button id='inquire'>" + buttonText[randombuttonText] + "</button>");
		console.log(randomReason);
	});
});
