$(document).ready(function() {
	$(".navigation a").click(function(event) {
		event.preventDefault();
	});

	$("#about").click(function() {
		$(".navigation-1").show();
		$(".about-page").show();
		$(".page").slideUp();
		$(".navigation").slideUp();
		$(".work-page").hide();
		$(".contact-page").hide();
	});

	$("#work").click(function() {
		$(".navigation-1").show();
		$(".work-page").show();
		$(".page").slideUp();
		$(".navigation").slideUp();
		$(".about-page").hide();
		$(".contact-page").hide();
	});

	$("#contact").click(function() {
		$(".navigation-1").show();
		$(".contact-page").show();
		$(".page").slideUp();
		$(".navigation").slideUp();
		$(".about-page").hide();
		$(".work-page").hide();		
	});
});

$(document).ready(function() {
	$(".navigation-1 a").click(function(event) {
		event.preventDefault();
		$anchor = $(this);
		$(".about-page:visible, .work-page:visible, .contact.page:visible").fadeOut("fast", function() {
				$selector = "." + anchor.attr("data-page")
				$(selector).fadeIn("slow")
			}
		}
	});

	// $(".about-1").click(function() {
	// 	$(".about-page").show();
	// 	$(".work-page").hide();
	// 	$(".contact-page").hide();
	// });

	// $(".work-1").click(function() {
	// 	$(".work-page").show();
	// 	$(".about-page").hide();
	// 	$(".contact-page").hide();	
	// });

	// $(".contact-1").click(function() {
	// 	$(".contact-page").show();
	// 	$(".about-page").hide();
	// 	$(".work-page").hide();		
	// });
});

