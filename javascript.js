

const userInputString = prompt("Enter froyo flavors separated by commas:");
constflavors= ("vanilla,vanilla, vanilla, strawberry, coffee,coffee:");






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

console.log(observedFlavors);
