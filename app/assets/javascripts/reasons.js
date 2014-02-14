$(document).ready(function() {
	reasons = ["Because Pussy Heat.",
								"Dem lips",
								"Because we're very special best friends",
								"Because one skeptical, egotistical soul recognizes another",
								"Did I mention Pussy Heat? Pussy Heat.",
								"Because books should be written about your mind/body connection. Or lack thereof.",
								"Because snuggles.",
								"Because you have all my secrets. And you still love me.",
								"Because I can't control it",
								"Because of your Union Square, your Kirkland couch, and Astoria lookout point horcruxes.",
								"Because nighttime giggles"
								];

	buttonText = ["Obviously",
								"I knew that",
								"Well I suppose so",
								"Keep it coming",
								"Mmmmmmhhhmmmm",
								"Yup. Got it."
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
