// scripts.js

//  zadanie 10_3_karuzela

$(function(){
	var carouselList = $("#carousel ul");
	var numberOfSlides = carouselList.find("li:last").index();
	var currentPosition = 1; // ustawiam pozycje startową na 2-gi slajd index 1 
	carouselList.css({marginLeft:-400}); // przesuwam slajdy w aby na starcie wyświetlać 2 -gi slajd
	$("#slidebar ul li").css('color','#34495e');
	$("#slidebar ul li").eq(currentPosition).css('color','#bdc3c7'); // slide 
	//	setInterval(changeSlide, 3000); 

	function changeSlideRight() {
		carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);	
	}

	function changeSlideLeft() {
		carouselList.animate({'marginLeft': 0}, 500, moveLastSlide);	
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);	
		carouselList.css({marginLeft:-400});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);	
		carouselList.css({marginLeft:-400});
	}

	$('i.fa-chevron-left').click(function() {
		$("#slidebar ul li").css('color','#34495e');
		if ( currentPosition == 0 ) {
			currentPosition = numberOfSlides ;
		} else currentPosition--;
		$("#slidebar ul li").eq(currentPosition).css('color','#bdc3c7');
		changeSlideLeft();
	});

	$('i.fa-chevron-right').click(function() {
		$("#slidebar ul li").css('color','#34495e');
		if ( currentPosition == numberOfSlides ) {
			currentPosition = 0 ;
		} else currentPosition++;
		$("#slidebar ul li").eq(currentPosition).css('color','#bdc3c7');
		changeSlideRight();
	});


	$("#slidebar").on('click','li',function() {
		clickPosition = $(this).index();
		$("#slidebar ul li").css('color','#34495e');
		$(this).css('color','#bdc3c7');
		if (( clickPosition - currentPosition ) > 0) {
			for ( i=currentPosition ; i<clickPosition; i++) {
				changeSlideRight();
			}
		currentPosition = clickPosition;	
		} 	else 	if (( clickPosition - currentPosition ) < 0) {
						for ( i=currentPosition ; i>clickPosition; i--) {
							changeSlideLeft();
						}
						currentPosition = clickPosition;	
					}
	});
		
	$("#slidebar ul li").tooltip({
		items: "li",
		content: function() {
			mouseOverPosition = $(this).index();
			switch (mouseOverPosition) {
				case 0:
					return "<img src=https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg height='100' width='150' />";
					break;
				case 1:
					return "<img src=https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662__340.jpg height='100' width='150'/>";
					break;	
				case 2:
					return "<img src=https://cdn.pixabay.com/photo/2017/10/22/09/02/training-2877134__340.jpg height='100' width='150'/>";
					break;
				case 3:
					return "<img src='https://cdn.pixabay.com/photo/2017/10/03/09/11/hand-2811679__340.jpg' height='100' width='150'/>";
					break;
				case 4:
					return "<img src='https://cdn.pixabay.com/photo/2016/06/09/20/38/woman-1446557__340.jpg' height='100' width='150'/>";
					break;
				case 5:
					return "<img src='https://cdn.pixabay.com/photo/2017/09/27/09/21/concept-2791440__340.jpg' height='100' width='150'/>";
					break;
			}	
		}
    });
	
}); //koniec głownej funkcji 




/*var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
	$(element).append(button)
	console.log(index)
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
	console.log(this);
});

$("span:even").css('color', 'red');
$("span:odd").css('color', 'blue');

var span = $("span");
    span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

*/





/*$(function(){
  var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);
  
  $("body").append(pWithText);
  $("body").append(pWithClass);
  
});



$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0);
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});





function color(element) {
    //element.style.backgroundColor='red'
    alert("Greetings from the element <div> with class " + element.className + " :)")
    //element.style.backgroundColor = ''
}
// zadanie 9.6

 
function checkOnclickEvent(param) {
	
	console.log(param);
	var element = document.createElement('li');
	var number = document.getElementsByTagName('li');
	element.innerHTML = ('item ' +number.length);
	param.appendChild(element);
	console.log(element);
}
var listElem = document.getElementById('list');
console.log(listElem);
buttonElem = document.getElementById('addElem');
console.log(buttonElem);
buttonElem.addEventListener('click', function() {
  checkOnclickEvent(listElem)
});

//zadanie 

function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});




var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
for ( i = 1 ; i <= withButtonClass.lenght; i++) {
	alert(+innertext);
}


console.log(document); // or window.document

console.log(window);

window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
}

console.log(location);
//window.location = 'http://www.kodilla.pl';


var navigation = document.getElementById('nav');
console.log(navigation);


var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);


var menu = document.getElementById('footer');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);

var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);


var navigation = document.getElementById('nav');
console.log(navigation.nextElementSibling);

//var newElem = document.createElement('p');
//newElem.innerHTML = 'The text inside the p tag, which is under newElem';
//console.log(newElem);


var navigation = document.getElementById('nav');
var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
navigation.appendChild(newElem);

var menu = document.getElementById('nav');
menu.className += ' navbar-right';
console.log(menu.className);


var navigation = document.getElementsByClassName('menuItem');
console.log(navigation[0].style);
navigation[0].style.background = 'red';
navigation[0].style.padding = '50px';
console.log(navigation[0].style);


drawTree();

function drawTree (h) {
	var h = prompt ('Jak duża ma być choinka?');
	if ( h > 0 ) {
		for ( var i = 1; i <= h ; i++) {
			var star = '';
			for ( var j = 1; j <= i ; j++) {
				star += '*';
			}
		console.log(star);
		}
	}  else alert ('Zła wysokość choinki ');
}




for ( var k = 0 ; k < 10 ; k++) {

    console.log('The value of k is now: ' + k);

    if (k > 5) {
        continue;
    }

    console.log('Instruction at the end of the loop ');
}


var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length); // It will display 6

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});

console.log(namesWithoutOla);

var keywords = 'red, green, blue, yellow, pink, orange, white';
var keywordsArray = keywords.split(', ');
keywordsArray.map( function(element) {
console.log('#tag-' + element);
} );


var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);
var textChanged = text.replace('Velociraptor',dinosaurUpperCase);
console.log(textChanged);
//var halfOfTextChanged = (textChanged.length)/2;
//console.log(halfOfTextChanged);
var firstHalfOfTextChanged = textChanged.substr(0,(textChanged.length)/2);
console.log(firstHalfOfTextChanged);

function getTriangleArea (a,h) {
	var a = prompt('Podaj wartość podstawy trójkąta');
	var h = prompt('Podaj wartość wysokości trójkąta');
	if ((a <=0) || (h <=0 )) { 
		alert ('Wprowadzona wartość jest mniejsza od zera - błąd !');
		return 'Nieprawidłowe dane';
	} else 
		return ( a*h/2) ;
}

var triangle1Area = getTriangleArea();
alert('Pole trójkąta to : '+ triangle1Area);
//console.log(getTriangleArea());
console.log(triangle1Area);

var arrayMen = ['Tomek','Krzysiek','Piotr','Paweł','Norbert','Kacper'];
var arrayWomen = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var arrayWomenAndMen = arrayMen.concat(arrayWomen);
console.log(arrayWomenAndMen);
var newName = 'Marian';
var isIn = arrayWomenAndMen.indexOf(newName);
if (isIn < 0) {
	arrayWomenAndMen.push(newName);
	console.log(arrayWomenAndMen);
} else {
	alert('Imię'+ newName +' występuje już w tablicy na pozycji numer: '+ isIn );
} */