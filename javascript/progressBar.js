window.addEventListener("scroll", function(){ //calls the function every time the page is scrolled

	var bar = document.getElementById("progressBar"); //get the progress bar element

	var screenPositionPercent = (window.scrollY/((document.body.offsetHeight)-(window.innerHeight)))*100 //creates variable that returns how far the user has scrolled as a % value
		//This calculation is a pain in the butt
		//first get scrollY-the user's position on the page
		//then divide it by the total height of the page (body.offsetHeight)
		//This doesnt fully work though becasue ScrollY measures from the top of the veiwport, so subtract the veiwport height(window.innerHeight) from the total height
		//Last, multiply by 100 to get a percentage out of 100 rather than 1
	document.getElementById("progressBar").style.width = screenPositionPercent + "%" //send the percentage to the div element that makes up the progress bar
		//remember to add the percent string or you will just be sending numbers whihc css doesnt like
})