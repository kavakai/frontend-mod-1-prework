/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog{};

var breed = new Dog();
var name = new Dog();

console.log(breed);
console.log(name);
// Prompt 2: Snack
class Snack{};

var type = new Snack();
var delicious = new Snack();

console.log(type);
console.log(delicious);

// Prompt 3: Shirt
class Shirt{};

var color = new Shirt();
var fit = new Shirt();

console.log(color);
console.log(fit);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

 //Prompt 1: Dog
class Dog{
  constructor() {
    this.breed = "Labrador retriever";
    this.name = "Mel";
    this.weightInPounds = 70;
  }
};
var lab = new Dog();
console.log(lab);


// Prompt 2: Snack
class Snack{
  constructor() {
    this.type = "Chips";
    this.delicious = true;
    this.name = "Pringles";
  }
};
var chip = new Snack();
console.log(chip);

// Prompt 3: Shirt
class Shirt{
  constructor() {
    this.color = "Blue";
    this.fit = "Slim";
    this.brand = "TravisMathew"
  }
};
var dressShirt = new Shirt();
console.log(dressShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog{
  constructor(breed, dogName, weight) {
    this.breed = breed;
    this.name = dogName;
    this.weightInPounds = weight;
  }
};
var lab = new Dog("Labrador retriever", "Mel", 70);
var bernese = new Dog("Bernese mountain dog", "Sammy", 93);
console.log(lab);
console.log(bernese);

// Prompt 2: Snack
class Snack{
  constructor(type, yum, name) {
    this.type = type;
    this.delicious = yum;
    this.name = name;
  }
};
var chip = new Snack("Chips", true, "Pringles");
var cookie = new Snack("Chocolate chip cookies", true, "Homemade")

console.log(chip);
console.log(cookie);
// Prompt 3: Shirt
class Shirt{
  constructor(hue, trim, name) {
    this.color = hue;
    this.fit = trim;
    this.brand = name;
  }
};
var dressShirt = new Shirt("Blue", "Slim", "TravisMathew");
var tShirt = new Shirt("White", "Loose", "GoodLife")

console.log(dressShirt);
console.log(tShirt);
