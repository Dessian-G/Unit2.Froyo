

const userInputString = prompt("Enter froyo flavors separated by commas:");
const flavors = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];
const flavorFrequencies = countFrequencies(flavors);
console.log(flavorFrequencies);

function countFrequencies(arr) {
    const frequencyMap = {}; 
    arr.forEach((item) => {
        if (frequencyMap[item]) {
           
            frequencyMap[item]++;
        } else {
           
            frequencyMap[item] = 1;
        }
    });

    return frequencyMap; // I Returned the object with frequencies
}



const observedFlavors = {};

function trackFlavors(flavors) {
  for (const flavor of flavors) {
    if (observedFlavors[flavor]) {
      observedFlavors[flavor]++;
    } else {
      observedFlavors[flavor] = 1;
    }
  }
}

constflavors = prompt("Enter froyo flavors separated by commas:");
const flavorsArray = userInput.split(",");
trackFlavors(flavorsArray);



 
function parseFlavors() {
    var inputText = document.getElementById('flavorsInput').value;
    var flavorsArray = inputText.split(',');

    var observedFlavors = {};

    flavorsArray.forEach(function(flavor) {
      if (!observedFlavors.hasOwnProperty(flavor.trim())) {
        observedFlavors[flavor.trim()] = true;
      }
    });

    console.log(observedFlavors);
  }
