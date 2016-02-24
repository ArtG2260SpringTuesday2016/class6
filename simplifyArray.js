
// Takes the data from `myData` and simplfies
// it into an array w/ 2 items each

// Remember about arguments overwriting scope

// JSON -> array of 2 item arrays
var twoItemArrayFromMyData = function(myData) {
  var finalArray = [];
  for (var i = 0; i < myData.length; i++) {
    var tempArray = [myData[i].apples, myData[i].orange];
    finalArray.push(tempArray);
  }
  return finalArray;
}


// Array with 2 items -> array of numbers
var sumOfFirstTwoArrayItems = function (anArray) {
  var finalArray = [];
  for (var i = 0; i < myData.length; i++) {
    addedArrayItems = anArray[i][0] + anArray[i][1];
    finalArray.push(addedArrayItems);
  }
  return finalArray;
}

// I'm lazy, combine the two
// Takes in JSON outputs totals
var fruitTotals = function(myData) {
  return sumOfFirstTwoArrayItems(twoItemArrayFromMyData(myData))
}
