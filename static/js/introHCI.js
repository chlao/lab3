'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").html("Butt");
		$(".jumbotron p").toggleClass("active"); 
	});

	$("#submitBtn").click(function(e) {
		var className = $('#project').val();
		$(className).animate({
			width: $('#width').val()
		});

		var newDescription = $('#description').val(); 
		$(className + " .project-description").text(newDescription); 
	}); 

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick); 
}

function projectClick(e){
	//console.log("Project Clicked"); 
	// Prevent the page from reloading 
	e.preventDefault(); 

	// In an event handler, $(this) refers to 
	// the object that triggered the event 
	//$(this).css("background-color", "#7fff00"); 
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1"); 
	jumbotronHeader.text(projectTitle); 

	var containingProject = $(this).closest(".project"); 
	var description = $(containingProject).find(".project-description"); 
	//containingProject.append("<div class='project-description'><p>Description of the project.</p></div>"); 

	if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } 
    else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(description).fadeOut(); 
    }
}