/*var a;
var b = "";
var c = "dat shit, lol";

//
if (a)
	alert("There`s smth. written here, lol");
else 
	alert("Shit, a variable seems to be empty");

//
if (b)
	alert("There`s smth. written here, lol");
else 
	alert("Shit, b variable seems to be empty");

//
if (c)
	alert("There`s smth. written here, lol");
else 
	alert("Shit, c variable seems to be empty");
*/

function Duck(sound) {
 this.sound = sound;
 this.quack = function() {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);