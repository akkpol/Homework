//-*1.Create a Basic JavaScript Object-*//
/*
let dog = {
    name : "Abby",
    numLegs : 4,
    };
    
    console.log(dog);
    */
//-*2.Use Dot Notation to Access the Properties of an Object-*//

/*
   let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name,dog.numLegs);
*/

//-*3.Create a Method on an Object-*//
/*
 let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() { return "This dog has " + this.numLegs+ " legs."}
  };
  
  console.log (dog.sayLegs());
  */

//-*4.Make Code More Reusable with the this Keyword-*//
/*
 let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  console.log(dog.sayLegs());
*/

//-*5.Define a Constructor Function-*//
/*
function Dog() {
  (this.name = "Geogre"), 
  (this.color = "White"), 
  (this.numLegs = 4);
}
*/

//-*6.Use a Constructor to Create Objects-*//
/*
 function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();
  
  console.log(hound);
  */

//-*7.Extend Constructors to Receive ArgumentsPassed-*//
/*
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");
  */

//-*8.Verify an Object's Constructor with instanceof-*//
/*
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(8);
myHouse instanceof House;
console.log(myHouse);
*/

//-*9.Understand Own Properties-*//
/*
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);
  */
