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
		//Empty gifs from last button on current button click
		$("#Gif-view").empty();

		//store results from the api in a variable
		var gifs = response.data;
		//make sure we are grabbing the api by testing it in the console
		console.log(gifs);
		//loop through the results to display the gif as a still and the rating
		for (var i = 0; i < gifs.length; i++) {
			//add a div for each gif and store it as a variable
			var gifDiv = $("<div class = 'gifTopic'>")
			//stores the rating from the looped results as a variable
			var gifRating = gifs[i].rating;
			//stores a paragraph to send to the dom with the results as the text
			var p = $("<p>").text("Rating: " + gifRating);
			//add bootstrap class
			p.addClass("col-sm-12");
			//make an image tag and store it as a variable
			var topicImage = $("<img>");		
			//sets the attribute of the source from the image results in the for loop and stores it in the variable "link"
			topicImage.attr("src", gifs[i].images.fixed_height_still.url);
			//still attribute
			topicImage.attr("data-still", gifs[i].images.fixed_height_still.url);
			//animated attribute
			topicImage.attr("data-animate", gifs[i].images.fixed_height.url);
			//set data-state attribute
			topicImage.attr("data-state", "still");
			//add class to use for the pause and animate function
			topicImage.addClass("gif");	
			//add bootstrap class
			topicImage.addClass("col-sm-12");
			//send to the html
			gifDiv.prepend(p);
			gifDiv.append(topicImage);

			$("#Gif-view").prepend(gifDiv);

		}


	});

} 

//add listening event outside of function for gifs
	$(document).on("click", ".gif", changeState);
 
 //Pause and animate gifs
		function changeState () {
			//retrieve the variable state from the .done function
			var state = $(this).attr("data-state");
			//make sure the program recognizes the state
			console.log(state); 
			// if else logic
			if (state === "still") {
				//change state to animate on click
				$(this).attr("data-state", "animate");
				//change link to animate on click
				var link = $(this).attr("data-animate");
				$(this).attr("src", link);
			} else if (state === "animate") {
				//change state to still on click
				$(this).attr("data-state", "still");
				//change link to still on click
				var link = $(this).attr("data-still");
				$(this).attr("src", link);
			}
		};
		

		
 
	 

//Topic array for button values. 
var topics = ["christmas tree", "gingerbread", "penguins", "home alone", "snow", "the nutcracker", "the grinch"];

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


	

