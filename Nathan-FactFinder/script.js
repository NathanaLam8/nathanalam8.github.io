var buttons = document.getElementById('menu');
var Theme = "light";


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
		
		

		
		for(var i = 0;i < 5;i++){
			buttons[i].style.backgroundColor = "deepskyblue";
			buttons[i].style.color = "#075670";
		}
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
		
		
		for(var i = 0;i < 5;i++){
			buttons[i].style.backgroundColor = "deepskyblue";
			buttons[i].style.color = "#075670";
		}
	}
	else if(color == 'ocean'){
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "#def3f6";
		section.style.backgroundColor = "#7fcdff";
		section.style.color = "#064273";
		document.querySelector('#image').style.backgroundColor = "#6fcdff";
		section.style.borderColor = "#1da2d8";
		document.querySelector('#image').style.borderColor = "#1da2d8";
		
		
		for(var i = 0;i < 5;i++){
			buttons[i].style.backgroundColor = "#73dcff";
			buttons[i].style.color = "#1a81a3";
		}
	}
	else{
		var section = document.querySelector('section');
		
		document.querySelector('body').style.backgroundColor = "black";
		section.style.backgroundColor = "#6f7885";
		section.style.color = "#f7f8fa";
		document.querySelector('#image').style.backgroundColor = "#6f7885";
		section.style.borderColor = "#595959";
		document.getElementById('image').style.borderColor = "#595959";
		
		
		for(var i = 0;i < 5;i++){
			buttons[i].style.backgroundColor = "#525252";
			buttons[i].style.color = "#b0aeae";
		}
		
	}
	Theme = color;

}

function fact1(){
	if(Theme == 'dark'){
		document.getElementById('Fact1').style.backgroundColor = "#787878";
		document.getElementById('Fact1').style.color = "#e3e3e3";
	}
	
	else if(Theme == 'ocean'){
		document.getElementById('Fact1').style.backgroundColor = "#82faf0";
		document.getElementById('Fact1').style.color = "#4e948e";
	}
	
	else{
		document.getElementById('Fact1').style.backgroundColor = "s#599af0";
		document.getElementById('Fact1').style.color = "#97d9e8";
	}
}
function fact2(){
	if(Theme == 'dark'){
		document.getElementById('Fact2').style.backgroundColor = "#787878";
		document.getElementById('Fact2').style.color = "#e3e3e3";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact2').style.backgroundColor = "#82faf0";
		document.getElementById('Fact2').style.color = "#4e948e";
	}
	else{
		document.getElementById('Fact2').style.backgroundColor = "#599af0";
		document.getElementById('Fact2').style.color = "#97d9e8";
	}
}
function fact3(){
	if(Theme == 'dark'){
		document.getElementById('Fact3').style.backgroundColor = "#787878";
		document.getElementById('Fact3').style.color = "#e3e3e3";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact3').style.backgroundColor = "#82faf0";
		document.getElementById('Fact3').style.color = "#4e948e";
	}
	else{
		document.getElementById('Fact3').style.backgroundColor = "#599af0";
		document.getElementById('Fact3').style.color = "#97d9e8";
	}
}
function fact4(){
	if(Theme == 'dark'){
		document.getElementById('Fact4').style.backgroundColor = "#787878";
		document.getElementById('Fact4').style.color = "#e3e3e3";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact4').style.backgroundColor = "#82faf0";
		document.getElementById('Fact4').style.color = "#4e948e";
	}
	else{
		document.getElementById('Fact4').style.backgroundColor = "#599af0";
		document.getElementById('Fact4').style.color = "#97d9e8";
	}
}
function fact5(){
	if(Theme == 'dark'){
		document.getElementById('Fact5').style.backgroundColor = "#545454";
		document.getElementById('Fact5').style.color = "#e3e3e3";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact5').style.backgroundColor = "#82faf0";
		document.getElementById('Fact5').style.color = "#4e948e";
	}
	else{
		document.getElementById('Fact5').style.backgroundColor = "#599af0";
		document.getElementById('Fact5').style.color = "#97d9e8";
	}
}


function Fact1Reset(){
	if(Theme == 'dark'){
		document.getElementById('Fact1').style.backgroundColor = "#525252";
		document.getElementById('Fact1').style.color = "#b0aeae";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact1').style.backgroundColor = "#73dcff";
		document.getElementById('Fact1').style.color = "#1a81a3";
	}
	else{
		document.getElementById('Fact1').style.backgroundColor = "deepskyblue";
		document.getElementById('Fact1').style.color = "#075670";
	}
	
}

function Fact2Reset(){
	if(Theme == 'dark'){
		document.getElementById('Fact2').style.backgroundColor = "#525252";
		document.getElementById('Fact2').style.color = "#b0aeae";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact2').style.backgroundColor = "#73dcff";
		document.getElementById('Fact2').style.color = "#1a81a3";
	}
	else{
		document.getElementById('Fact2').style.backgroundColor = "deepskyblue";
		document.getElementById('Fact2').style.color = "#075670";
	}
	
}
function Fact3Reset(){
	if(Theme == 'dark'){
		document.getElementById('Fact3').style.backgroundColor = "#525252";
		document.getElementById('Fact3').style.color = "#b0aeae";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact3').style.backgroundColor = "#73dcff";
		document.getElementById('Fact3').style.color = "#1a81a3";
	}
	else{
		document.getElementById('Fact3').style.backgroundColor = "deepskyblue";
		document.getElementById('Fact3').style.color = "#075670";
	}
	
}
function Fact4Reset(){
	if(Theme == 'dark'){
		document.getElementById('Fact4').style.backgroundColor = "#525252";
		document.getElementById('Fact4').style.color = "#b0aeae";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact4').style.backgroundColor = "#73dcff";
		document.getElementById('Fact4').style.color = "#1a81a3";
	}
	else{
		document.getElementById('Fact4').style.backgroundColor = "deepskyblue";
		document.getElementById('Fact4').style.color = "#075670";
	}
}
function Fact5Reset(){
	if(Theme == 'dark'){
		document.getElementById('Fact5').style.backgroundColor = "#525252";
		document.getElementById('Fact5').style.color = "#b0aeae";
	}
	else if(Theme == 'ocean'){
		document.getElementById('Fact5').style.backgroundColor = "#73dcff";
		document.getElementById('Fact5').style.color = "#1a81a3";
	}
	else{
		document.getElementById('Fact5').style.backgroundColor = "deepskyblue";
		document.getElementById('Fact5').style.color = "#075670";
	}
}
