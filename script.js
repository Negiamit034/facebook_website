var database = [
   {
	username: "amit",
	password: "education123"
   }
];

var newsfeed = [
    {
	username: "bobby",
	timeline: "so tired of learning"
     },
     {
	username: "sally",
	timeline: "javascript is so cool"
     }
];

var usernamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(user,pass) {
	if ( user === database[0].username && 
		pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("sorry,wrong username and password");
	}
}


signIn(usernamePrompt, passwordPrompt);