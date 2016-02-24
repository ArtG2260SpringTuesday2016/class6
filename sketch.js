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

function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")  
  var visTotals = function (someData) {
    for (var i = 0; i < someData.length; i++){
      var barHeight = someData[i].apples + someData[i].orange;
      var barWidth = 10;
      var margin = 5;
      var spacing = i *(margin + barWidth);
      var barY = 0;
      
      rect(spacing, barY, barWidth, barHeight * 10)
    }
  }
  visTotals(myData);
}

function draw() {

}
