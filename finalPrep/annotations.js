// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {//creates a function called buildABear to include the arguments name, age, fur, clothes, specialPower.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;//adds a variable named greeting that logs the phrase within the backticks including the name placeholder within the ${}.
  var demographics = [name, age];//adds demographics variable that includes the array of name and age.
  var powerSaying = "Did you know that I can " + specialPower + " ?";//adds variable powerSaying that concatenates the string and specialPower along with another string.
  var builtBear = {//creates an object named builtBear.
    basicInfo: demographics,//adds variable to builtBear named basicInfo to include demographics.
    clothes: clothes,//adds variable clothes to builtBear to include input clothes.
    exterior: fur,//adds variable fur to builtBear to include input fur.
    cost: 49.99,//adds cost variable with a static integer value of 49.99.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//adds sayings variable to builtBear that includes the array with greeting, powerSaying, and a string.
    isCuddly: true,//adds isCuddly variable with the boolean value of true.
  };

  return builtBear//Ends the function of buildABear and returns the value of builtBear.
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');//creates an object instance for the function buildABear with the name "fluffy", age 4, fur "brown", clothes "pants, jorts, tanktop", specialPower "give you nightmares."
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');//creates object instance of buildABear with the name "sleepy", age 2, fur purple, clothes "pajamas, sleeping cap", specialPower "sleeping in."



//FizzBuzz
function fizzBuzz(num1, num2, range) {//creates a function named fizzBuzz with the arguments of num1, num2, range.
  for (var i = 0; i <= range; i++) {//creates a loop with the parameters variable "i" equal to 0, "i" equal to or less than the "range" argument, add one to "i."
    if (i % num1 === 0 && i % num2 === 0) {//creates a conditional statement with the conditon of "i" divided by num1 is strictly equal to 0 AND "i" divided by num2 is strictly equal to 0.
      console.log('fizzbuzz');//if line 29 proves true than print the string "fizzbuzz."
    } else if (i % num1 === 0) {//if the conditon on line 29 proves false, then check to see if "i" divided by num1 is strictly equal to 0.
      console.log('fizz');//if line 31 proves true, print the string "fizz."
    } else if (i % num2 === 0) {//if line 31 proves false, then test to see if "i" divided by num2 is strictly equal to 0.
      console.log('buzz');//if line 33 proves true then print the string "buzz."
    } else {//if none of the above conditions prove true then print the next line.
      console.log(i);//print "i" to the console if none of the above conditions are true.
    }
  }
}

fizzBuzz(3, 5, 100);//create object instance with nume1=3, num2=5, range=100.
fizzbuzz(5, 8, 400);//create object instance with num1=5, num2=8, range=400.
