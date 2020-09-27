// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  //first loop using map function
  console.log("First Loop using the map function:");
  var greet = function(name){
    var greeting;
    var letter1 = (name.charAt(0)).toLowerCase();
    if (letter1 == "j"){
        greeting = byeSpeaker.speakSimple(name);
    }
    else{
        greeting = helloSpeaker.speakSimple(name);
    }
    return greeting;
  }
  var names2 = names.map(greet);
  for (var i in names2){
    console.log(names2[i]);
  }

  //second loop using reduce function
  console.log("Second Loop using the reduce function:");
  var initialValue = {
    hello: [], 
    bye: []
  };
  var greet2 = function(accu, name){
     var letter1 = (name.charAt(0)).toLowerCase();
     if (letter1 == "j"){
        var greeting = byeSpeaker.speakSimple(name);
        (accu.bye).push(greeting);
     }
     else{
        var greeting = helloSpeaker.speakSimple(name);
        (accu.hello).push(greeting);
     }
     return accu;
  }
  var names3 = names.reduce(greet2,initialValue);
  var helloGreeting = names3.hello;
  var byeGreeting = names3.bye;
  for (var i in helloGreeting){
    console.log(helloGreeting[i]);
  }
  for (var i in byeGreeting){
    console.log(byeGreeting[i]);
  }

//third loop using neither map nor reduce function
  console.log("Third Loop using neither map nor reduce function:");
// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
  for (var i in names) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
    var name = names[i];
    var firstLetter = name.charAt(0);
    var firstLetterLower = firstLetter.toLowerCase();

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
    if (firstLetterLower === "j") {
    // byeSpeaker.xxxx
      byeSpeaker.speak(name);
    } else {
    // helloSpeaker.xxxx
      helloSpeaker.speak(name);
    }
  }
} )(window);

