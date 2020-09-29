const mypresentation = require('./information.js');

var cowsay = require("cowsay");

let presentation = {
    name : "Aymeric",
    campus : "WildCodeShool",
}

console.log(cowsay.say({
	text : `Hello I'm ${presentation.name} from ${presentation.campus}`,
	e : "oO",
	T : "U "
}));

