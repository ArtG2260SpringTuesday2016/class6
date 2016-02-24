var myData = [
    {
      "apples": 5,
      "orange": 5,
      "foo": "x",
      "bar": otherData
    },{
      "apples": 6,
      "orange": 4,
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
      "apples": 5,
      "orange": 5,
      "foo": "x",
      "bar": "pizza"
    },{
      "apples": 5,
      "orange": 5,
      "foo": "x",
      "bar": "icecream"
    }
  ];

var otherData = [
  {
    "apples": 5,
    "orange": 5,
    "foo": "x",
    "bar": "nested"
  }
];


var firstTwoNumbers = function (myData) {
  var justFruit = [];
  for (var i = 0; i < myData.length; i++){
    var tempArray = [myData[i].apples, myData[i].orange];
    justFruit.push(tempArray);
  }
  return justFruit;
}

var sumOfFirstTwoItems = function(someData){
  var finalArray = [];
  for (var i = 0; i < myData.length; i * 2){
    addedArrayItems = someData[i] + someData[i+1];
    finalArray.push(addedArrayItems);
  }
  return finalArray;
}

var fruitTotals = function(myData){
  return sumOfFirstTwoItems(firstTwoNumbers(myData))
}

function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")
  var fruitTotals = function(someData){
    for (var i = 0; i < someData.length; i++){
      var barHeight = (someData[i].apples + someData[i].orange)*10;
      var barSpacing = i*15;
      var barEnd = 0;
      var barWidth = 10;
      rect(barSpacing, barEnd, barWidth, barHeight)
    }
  }
  fruitTotals(myData);
}

function draw() {

}
