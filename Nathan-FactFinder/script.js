



function changeFact(num){
	var x = num;
	
	if(x == 'one'){
		document.getElementById('section').innerHTML = "Our Oceans cover more than 70% of the Earth's surface.";
		document.querySelector('#image').style.backgroundImage = "url('images/oceanImage.jpg')";
		document.querySelector('#image').style.backgroundSize = "1100px";
	}
	else if(x == 'two'){
		document.getElementById('section').innerHTML = "About 94% of the Earth's living species are aquatic.";
		document.querySelector('#image').style.backgroundImage = "url('images/marineAnimals.jpg')";
		document.querySelector('#image').style.backgroundSize = "1450px";
	}
	else if(x == 'three'){
		document.getElementById('section').innerHTML = "Great white sharks have their own underwater 'cafe'";
		document.querySelector('#image').style.backgroundImage = "url('images/greatWhiteShark3.jpg')";
		document.querySelector('#image').style.backgroundSize = "1000px";
	}
	else if(x == 'four'){
		document.getElementById('section').innerHTML = "Over 70% of oxygen is produced by ocean species, most of which are marine algae.";
		document.querySelector('#image').style.backgroundImage = "url('images/algae.jpg')";
		document.querySelector('#image').style.backgroundSize = "1000px";
	}
	else{
		document.getElementById('section').innerHTML = "The pacific ocean contains around 25,000 islands.";
		document.querySelector('#image').style.backgroundImage = "url('images/island.jpg')";
		document.querySelector('#image').style.backgroundSize = "1000px";
	}
}

function changeBackground(color){
	if(color == 'light'){
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "aliceblue";
		section.style.backgroundColor = "aliceblue";
		section.style.color = "black";
		document.querySelector('#image').style.backgroundColor = "aliceblue";
		section.style.borderColor = "aquamarine";
		document.getElementById('image').style.borderColor = "aquamarine";
	}
	else if(color == 'cool'){
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "aliceblue";
		section.style.backgroundColor = "aliceblue";
		section.style.color = "black";
		document.querySelector('#image').style.backgroundImage = "url('images/rickRoll.gif')";
		document.querySelector('#image').style.backgroundSize = "1000px";
		section.style.borderColor = "aquamarine";
		document.getElementById('image').style.borderColor = "aquamarine";
	}
	else if(color == 'ocean'){
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "#def3f6";
		section.style.backgroundColor = "#7fcdff";
		section.style.color = "#064273";
		document.querySelector('#image').style.backgroundColor = "#6fcdff";
		section.style.borderColor = "#1da2d8";
		document.querySelector('#image').style.borderColor = "#1da2d8";
	}
	else{
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "black";
		section.style.backgroundColor = "#6f7885";
		section.style.color = "#f7f8fa";
		document.querySelector('#image').style.backgroundColor = "#6f7885";
		section.style.borderColor = "#595959";
		document.getElementById('image').style.borderColor = "#595959";
		
	}
}