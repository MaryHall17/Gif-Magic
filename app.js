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

//Api key
var magicKey = "YS9cNoPBG3S3ShQcI9FQwNycGpX342a7";

//search paramater
var q = $("#user-input")

//rating paramater
var rating = "G";
//queryUrl

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=YS9cNoPBG3S3ShQcI9FQwNycGpX342a7&q=pizza&limit=10&offset=0&rating=G&lang=en"
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
			button.addClass("btn btn-info");
			//Add a data-attribute to later grab outside of this function
			button.attr("data-name", topics[i]);
			//Provide the button text as the topic name
			button.text(topics[i]);
			//Add the buttons to the button-view div
			$("#button-view").append(button);
		}
	}

	//Calling the renderButtons to display the initial buttons
	renderButtons();
	

