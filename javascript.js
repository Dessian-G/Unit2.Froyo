
var flavors = prompt["vanilla,vanilla, vanilla, strawberry, coffee,coffee"];

var flavorCounts = {};
flavors.split(",").forEach(function (flavor) {
  if (flavorCounts.hasOwnProperty(flavor)) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
});

var table =document.createElement("table")