const rowNumbers = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
const fontSizes = ["x-small", "small", "medium", "large", "x-large"];
const fontAndBCGColor = "hsl(233, 70%, 75%)";
let colorCounter = 140;

for (let i = 0; i < rowNumbers.length; i++) {
  // Creating h1 elements
  let h1El = document.createElement("h1");

  // Adding text i++
  h1El.innerText = rowNumbers[i];

  // Changing fontsize
  h1El.style.fontSize = fontSizes[i];

  // Chaning background
  h1El.style.backgroundColor = `hsl(${colorCounter}, 100%, 55%)`;
  colorCounter += 10;

  //Changing text color
  h1El.style.color = fontAndBCGColor;
  //Justify content to center
  h1El.style.display = "flex";
  h1El.style.justifyContent = "center";

  // Appending to body
  document.body.appendChild(h1El);
}

// Creating div element to house lists
let divEl = document.createElement("div");
divEl.style.border = "1px solid black";
divEl.style.display = "flex";
divEl.style.justifyContent = "space-around";
document.body.appendChild(divEl);

// Array with numbers in writing
const numbersInWriting = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// loop to create outer lists
for (let i = 0; i <= 2; i++) {
  let listEl = document.createElement("ul");
  listEl.style.backgroundColor = fontAndBCGColor;
  listEl.style.listStyle = "none";
  listEl.style.margin = "10px";
  listEl.style.display ="flex";
  listEl.style.flexDirection ="column";
  divEl.appendChild(listEl);

  // inner loop to create inner listitems
  for (let j = 0; j <= 9; j++) {
    let listItemEl = document.createElement("li");
    listItemEl.style.margin = "5px";
    

    if (i == 0) {
      listItemEl.textContent = j;
      listEl.style.justifyContent = "flex-start";
    }

    if(i == 1){
      listItemEl.textContent = j;
      listEl.style.flexDirection = "column-reverse";

    }

    if (i == 2) {
      listItemEl.textContent = numbersInWriting[j];
    }
    listEl.appendChild(listItemEl);
  }
}
