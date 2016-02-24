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

var graph = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barWidth = 10
    var spacing = i * (margin + barWidth);
    var margin = 5;
    var barHeight = someData[i].apples + someData[i].orange;
    rect(spacing, 0, barWidth, barHeight * 10)
  }
}

function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")
  graph(myData);
}

function draw() {

}
