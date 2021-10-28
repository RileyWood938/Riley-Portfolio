var slideIndex = 0; //what slide we are on

showSlides(); //call the function immediately

function showSlides(){
	var i;
	var slides= document.getElementsByClassName("slides"); // get the slides from DOM
	for(i = 0; i <slides.length; i++){ //hide all of the slides
		slides[i].style.display = "none";
	}
	slideIndex++; //add to slide index
	if(slideIndex > slides.length){ //reset Slide index if it goes ove rthe number of slides
		slideIndex = 1
	}
	slides[slideIndex-1].style.display = "block"; //show the current slide
	setTimeout(showSlides,5000); //wait time between slides
}