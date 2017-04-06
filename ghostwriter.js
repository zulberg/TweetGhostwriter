function writeTweet()
{
var intro=["There's always", "No escaping", "I can't stand", "Stay away from"];
var body=["stupid people,", "fast food joints,", "credit card offers,", "reality shows,", "love songs,"];
var end=["they will wreck your life.", "they will never die."];
var randIndex=randomUpTo(intro.length-1);
var sentence=intro[randIndex];
randIndex=randomUpTo(body.length-1);
sentence=sentence+" "+body[randIndex];
randIndex=randomUpTo(end.length-1);
sentence=sentence+" "+end[randIndex];
document.getElementById("tweet").innerHTML=sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
