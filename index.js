/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 21;

if (votingAge > 18) {
  console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1 = 0;
let var2 = 1;

if (var1 === 1) {
  var2 = 0;
} else {
  var2 = 1;
}
console.log(var2);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let number = "1999";
console.log(parseInt(number));

//Task d: Write a function to multiply a*b 

function multiply(a, b) {
  return a * b;
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(myAge) {
  return myAge * 7;
}
console.log(dogYears(27));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder (weight, age) 
{
  if (age >= 1) 
  {
    if(weight <= 5)
    {
      return weight * .05;
    } 
    else if (weight > 5 && weight <= 10)
    {
      return weight * .04;
    }
    else if (weight > 10 && weight <= 15) 
    {
      return weight * .03;
    }
    else 
    {
      return weight * .02;
    }
  } 
  else 
  {
    if (age >= (1/6) && age <= (1/4))
    {
      return weight * .1;
    }
    else if (age > (1/4) && age <= (7/12))
    {
      return weight * .05;
    }
    else if (age > (7/12) && age < 1)
    {
      return weight * .04;
    }
    else 
    {
      return console.log("Your dog is younger than 2 months!");
    }
  }
}

console.log(dogFeeder(15, 1) + ' lbs of raw food');



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rpsGame(yourChoice) {

  let yourChoiceValue = Math.floor(Math.random() * 3 + 1) ;
  let computerChoiceValue = Math.floor(Math.random() * 3 + 1);
  console.log(yourChoiceValue, computerChoiceValue);


  if (yourChoice === 'rock' || yourChoice === 'paper' || yourChoice === 'scissors') {
    if(yourChoiceValue < computerChoiceValue) {
      return console.log('You lose...T_T')
    } else if (yourChoiceValue === computerChoiceValue) {
      return console.log('TIE! ^^;')
    } else {
      return console.log('You WIN!')
    }
  }
}

rpsGame('rock');
rpsGame('paper');
rpsGame('scissors');

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convKmToMiles (kilo) {
  return console.log(kilo * 0.621371 + ' miles');
}
convKmToMiles(2.3);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function convFtToCm (feet) {
  return console.log(feet * 30.48 + ' cm');
}
convFtToCm(2.3);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong (numBottles) {
 
  for(; numBottles > 0; numBottles--) {
    console.log(`${numBottles} bottles soda on the wall, ${numBottles} bottles of soda, ${numBottles-1} bottles of soda on the wall left.`);
  }
}
annoyingSong(99);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function yourGrade (score) {
  if(score >= 90) {
    console.log('Your grade: A');
  } else if (score < 90 && score >= 80) {
    console.log('Your grade: B');
  } else if (score < 80 && score >= 70) {
    console.log('Your grade: C');
  } else if (score < 70 && score >= 60) {
    console.log('Your grade: D');
  } else if (score < 60) {
    console.log('Your grade: F')
  } else {
    console.log('Please type your score between 0 to 100');
  }
}

yourGrade(100);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let counts = 0;
  //loop the length of sentence what we wrote
  for(let i = 0; i < sentence.length; i++) {
    //count if the vowels and sentence are matched
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  return console.log(counts);
}

countVowels('Hello World');
countVowels('AaEeIiOoUu');
countVowels('aaaaaaaaaaaaaaaaaaa');




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rpsGame(yourChoice) {

  let yourChoiceValue = 0.5;
  let computerChoiceValue = Math.round(Math.random());

  if (yourChoice === 'rock' || yourChoice === 'paper' || yourChoice === 'scissors') {
    if(yourChoiceValue < computerChoiceValue) {
      return console.log('You lose...T_T')
    } else {
      return console.log('You WIN! ^^') 
    }
  }
}

rpsGame(prompt('Choose from rock, paper, scissors'))



function dogFeeders(weight, age) {
  let food = 0
  if (age >=1) {
      if (weight <=5) {
         food = weight * .05;
      } else if (weight > 5 &&weight < 10){
          food = weight * .04;
      } else if (weight > 10 &&weight < 15){
          food = weight * .03;
      } else if (weight > 15){
          food = weight * .02;
      }
  }  else {
      console.log('puppy')
  } 
  if (age >= 0.16666667 &&age <= 0.33) {
      food = age * .10;
  } else if (age >= 0.33 &&age <= 0.58333333) {
      food = age * .05;
  } else if (age >= 0.58333333 &&age <= 1) {
      food = age * .04;
  }
  return food;
}
console.log(dogFeeders(15,1));
/*re-commit on github*/