$(document).ready(function() {
	$(".navigation a").click(function(event) {
		event.preventDefault();
		console.log("click");
	});

	$(".navigation a").click(function() {
		$(".about-page").show();
		$(".page").hide();
	});

	$("navigation a").click(function() {
		$(".work-page").show();
	});
});

