var myData = [
    {
      "apples": 1,
      "orange": 5,
      "foo": "x",
      "bar": otherData
    },{
      "apples": 2,
      "orange": 18,
      "foo": "x",
      "bar": "numbers"
    },{
      "apples": 7,
      "orange": 3,
      "foo": "x",
      "bar": "garbage"
    },{
      "apples": 1,
      "orange": 9,
      "foo": "x",
      "bar": "waffles"
    },{
      "apples": 6,
      "orange": 22,
      "foo": "x",
      "bar": "pizza"
    },{
      "apples": 5,
      "orange": 19,
      "foo": "x",
      "bar": "icecream"
    }
  ];

var otherData = [
  {
    "apples": 75,
    "orange": 25,
    "foo": "x",
    "bar": "nested"
  }
];

// helper function that makes random number between two other numbers

function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")
  graph(myData);
}

var graph = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barHeight = someData[i].apples + someData[i].orange;
    var barWidth = 10;
    var spacing = i * (margin + barWidth);
    rect(i * 25, 0, 10, barHeight * 10)
    
  }
}

var value = 10
//helper function
function drawARectangle(someData, barHeight) {
  var size = 10;
  console.log(value);




