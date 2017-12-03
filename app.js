//Psuedo code: 
//Make an array of topics, set the variable as topics
//For loop or forEach for:
	//When sending the array to the html as buttons, utilize .empty()
	//So that the buttons don't repeat
	//Set the buttons attribute to the topic
	//Set the buttons default value to the still image
	//Add an attribute to the button that captures whether it is still or animated
	//Save above attribute in a variable
	//Log the variable to test
//Outside of for loop
	//Create if-else logic for pausing/animating gifs
	//Use whether this image is animated or still from the variable
//Empty the gifs at each button; no prepending or appending. .empty()?
//Limit 10 gifs

//Display gif
function displayGif() {
	//data from for-loop inside renderButton function. Search paramter:
	var search = $(this).attr("data-name");
	//rating paramater
	var rating = "G";
	//Api key
	var magicKey = "YS9cNoPBG3S3ShQcI9FQwNycGpX342a7";
	//URL:
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=YS9cNoPBG3S3ShQcI9FQwNycGpX342a7&q=" + search + "&limit=10&offset=0&rating=G&lang=en";

	//Ajax call for clicked topic button
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(search);
		$("#Gif-view").html(JSON.stringify(response.data.images));
	});
} 



//queryUrl


//Topic array for button values. 
var topics = ["candy canes", "gingerbread", "penguins", "santa", "snow", "nutcracker", "the grinch"];

	//Function for displaying buttons from the array
	function renderButtons() {
		//Deletes the previous Christmas topics
		$("#button-view").empty();
		//Loops through array of topics
		for (var i = 0; i < topics.length; i++) {
			//Generate buttons for each topic in the array
			var button = $("<button>");
			//Add a class of topics to button
			button.addClass("btn btn-success");
			//Add a data-attribute to later grab outside of this function
			button.attr("data-name", topics[i]);
			//Provide the button text as the topic name
			button.text(topics[i]);
			//Add the buttons to the button-view div
			$("#button-view").append(button);
		}
	}

	//Function for adding new buttons when the submit button is clicked
	$("#add-topic").on("click", function(addTopic) {
		addTopic.preventDefault();
		//Grab user input:
		var topic = $("#user-input").val().trim();
		//Push to our topic array:
		topics.push(topic);
		//Call the renderButton function to add new topics as buttons
		renderButtons();
	});

	//Add a click listening event for the topic buttons
	$(document).on("click", ".btn-success", displayGif);

	//Calling the renderButtons to display the initial buttons
	renderButtons();


	

