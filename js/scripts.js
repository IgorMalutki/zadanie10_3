// scripts.js




//  zadanie 10_3_karuzela

$(function(){
	var carouselList = $("#carousel ul");
	var currentPosition = 1; // ustawiam pozycje startową na 2-gi slajd index 1 
	carouselList.css({marginLeft:-400});
	$("#slidebar ul li").eq(currentPosition).css('color','blue'); // slide 
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
		$("#slidebar ul li").css('color','black');
		//console.log(currentPosition);
		if ( currentPosition == 0 ) {
			currentPosition = 5 ;
		} else currentPosition--;
		//console.log(currentPosition);
		$("#slidebar ul li").eq(currentPosition).css('color','blue');
		changeSlideLeft();
	});

	$('i.fa-chevron-right').click(function() {
		$("#slidebar ul li").css('color','black');
		//console.log("current " + currentPosition);
		if ( currentPosition == 5 ) {
			currentPosition = 0 ;
		} else currentPosition++;
		//console.log("current " + currentPosition);
		$("#slidebar ul li").eq(currentPosition).css('color','blue');
		changeSlideRight();
	});


	$("#slidebar").on('click','li',function() {

		clickPosition = $(this).index();
		$("#slidebar ul li").css('color','black');
		$(this).css('color','blue');
		console.log("click " + clickPosition);
		console.log("current " + currentPosition);
		if (( clickPosition - currentPosition ) > 0) {
			for ( i=currentPosition ; i<clickPosition; i++) {
				console.log("i " + i);
				changeSlideRight();
			}
		currentPosition = clickPosition;	
		console.log("click " + clickPosition);
		console.log("current " + currentPosition);
		} else if (( clickPosition - currentPosition ) < 0) {
					for ( i=currentPosition ; i>clickPosition; i--) {
						console.log("i " + i);
						changeSlideLeft();
					}
				currentPosition = clickPosition;	
				console.log("click " + clickPosition);
				console.log("current " + currentPosition);	
			}
	});
});




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