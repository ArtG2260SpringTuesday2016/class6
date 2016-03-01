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


var barHeight = function(x, y){
 return x[y].apples + x[y].orange;
};
var big = 10;
var barWidth = 10;
var margin = barWidth / 2;
var spacing = function(x){
  return x * (margin + barWidth);
};
var visTotals = function (someData) {
  for (var i = 0; i < someData.length; i++){
    rect(spacing(i), 0, barWidth, barHeight(someData, i) * big);
  }
};


function setup() {
  createCanvas(1000, 500);
  noStroke();
  fill("orange");

  visTotals(myData);
}

function draw() {

}
