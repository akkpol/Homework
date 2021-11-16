//----**Build JavaScript Objects**----//
/*
var myDog = {
    // Only change code below this line
    name : "Chacha",
    legs : 4,
    tails : 1,
    friends: ["Minny", "Tony"],
    
    // Only change code above this line
    };
    */

//----**Accessing Object Properties with Dot Notation**----//

/*
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line
  */

//----**Accessing Object Properties with Bracket Notation**----//
/*
  // Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line
  */

//----**Accessing Object Properties with Variables**----//
/*
    // Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber];   // Change this line
  */

//----**Updating Object Properties**----//
/*
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy Coder";
  */

//----**Add New Properties to a JavaScript Object**----//
/*
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof";
  
  */
//----**Delete Properties from a JavaScript Object**----//
/*
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog["tails"];
*/

//----**Using Objects for Lookups**----//
/*
// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank",
  }
  result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
  */

//----**Testing Objects for Properties**----//

/*
  function checkObj(obj, checkProp) {
    // Only change code below this line
  
    //.hasOwnProperty(propname) method of objects
     if(obj.hasOwnProperty(checkProp)) {
       return obj[checkProp];
  
     } else {
       return "Not Found";
     }
    
    // Only change code above this line
  }
  
  //test
   let test = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
   console.log(test);
   */

//----**Manipulating Complex Objects**----//

/*
     var myMusic = [
        {
          "artist": "Billy Joel",
          "title": "Piano Man",
          "release_year": 1973,
          "formats": [
            "CD",
            "8T",
            "LP"
          ],
          "gold": true
        },
      
        {
          "artist" : "Samatcha",
          "title": "Guitar",
          "release_year": 2022,
          "formats" : [
            "Youtube",
            "Facebook",
            "Twitter"
          ],
        }
      ];
      */
//----**Accessing Nested Objects**----//
/*
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
*/

//----**Accessing Nested Arrays**----//

/*
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);
*/

//----**Record Collection**----//

//แบบที่ 1
/*
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/

//แบบที่ 2
/*
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/

//----**Record Collection**----//
