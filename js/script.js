const fontSizes = ["x-small", "small", "medium", "large", "x-large"];
const fontAndBCGColor = "hsl(233, 70%, 75%)";
let colorCounter = 140;

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

// Array with numbers
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Box sizing = border-box
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";

for (let i = 0; i < 5; i++) {
  // Creating h1 elements
  let h1El = document.createElement("h1");

  // Adding text i++
  h1El.innerText = `Rad ${numbers[i + 1]}`;

  // Changing fontsize
  h1El.style.fontSize = fontSizes[i];

  // Chaning background
  h1El.style.backgroundColor = `hsl(${colorCounter}, 100%, 80%)`;
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

// loop to create outer lists
for (let i = 0; i <= 2; i++) {
  let listEl = document.createElement("ul");

  // Alot of css
  listEl.style.backgroundColor = fontAndBCGColor;
  listEl.style.height = "200px";
  listEl.style.width = "80px";
  listEl.style.listStyle = "none";
  listEl.style.display = "flex";
  listEl.style.flexDirection = "column";
  listEl.style.justifyContent = "center";
  listEl.style.alignItems = "center";
  listEl.style.paddingInlineStart = "0";
  divEl.appendChild(listEl);

  // inner loop to create inner listitems
  for (let j = 0; j <= 9; j++) {
    let listItemEl = document.createElement("li");

    // CSS for listitems
    listItemEl.style.backgroundColor = "white";
    listItemEl.style.width = "60%";

    if (j % 2 === 0) {
      listItemEl.style.backgroundColor = "black";
      listItemEl.style.color = "white";
    }

    // Nested if == blääää

    switch (i) {
      case 0:
        listItemEl.textContent = numbers[j];
        if (j == 4) {
          listItemEl.style.backgroundColor = fontAndBCGColor;
        }
        break;
      case 1:
        listItemEl.textContent = numbers[j];
        listEl.style.flexDirection = "column-reverse";
        listItemEl.style.textAlign = "center";
        if (j == 8) {
          listItemEl.style.backgroundColor = fontAndBCGColor;
        }
        break;
      case 2:
        if (j == 5) {
          listItemEl.style.backgroundColor = fontAndBCGColor;
        }
        listItemEl.textContent = numbersInWriting[j];
        listItemEl.style.textAlign = "right";
        break;
      default:
        break;
    }


    listEl.appendChild(listItemEl);
  }
}
