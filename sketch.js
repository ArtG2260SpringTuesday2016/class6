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

/*
 var twoitemarrayfromData = function (myData){
  var finalArray = [];
  for (var i = 0; i < myData.length; i++) {
  var tempArray = [myData[i][0], myData[i][1]];
  finalArray.push(tempArray);
  }
  return finalArray;
  } 
  
  
  
  var totaltwoitemsfromData = function (myData){
    var sumArray = [];
    for (var i = 0; i < myData.length; i++){
      addedArrayItems = somedata[i] + someData[i + 1];
      sumArray.push(addedArrayItems);
    }
    return sumArray;
  }
  
 */
 
 
function setup() {
  createCanvas(1000, 500);
  noStroke();
  fill("orange");
  var visTotals = function (someData) {
    for (var i = 0; i < someData.length; i++){
      var barHeight = someData[i].apples + someData[i].orange;
      var rectWidth=10;
      rectHeight=barHeight * 10;
      var spacing=i * (5 + rectWidth);
      rect(spacing, 0, rectWidth, rectHeight);
    }
  };
  visTotals(myData);
}

function draw() {

}
