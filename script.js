const grid = document.querySelector("#grid");
const gridHeight = grid.offsetHeight -2;
const gridWidth = grid.offsetWidth - 2;

let gridInput = document.querySelector("#userGridSelection");

function gridCreator () {
  function gridValue () {
    console.log(gridInput.value);
    return gridInput.value;
  };

  let gridSize = parseInt(gridValue());
  let noOfSquares = gridSize*gridSize;
  let height = 100/gridSize;

  function renderGrid () {
    for (let i = 0; i < noOfSquares; i ++) {
      const paintingDivs = document.createElement("div");
      paintingDivs.setAttribute(`style`, `height: ${height}%; aspect-ratio: 1; border: 0; flex: 1 1 0; outline: 1px black solid`);
      paintingDivs.setAttribute("class", "squares");
      paintingDivs.addEventListener("click", (e) => {
        e.target.style.backgroundColor = `${color()}`;
      })
      grid.appendChild(paintingDivs);
    };
  };

  renderGrid();
};

gridCreator();

gridInput.addEventListener("click", () => {
  for (let i = grid.childElementCount; i >0; i--) {
    grid.removeChild(grid.firstChild);
    console.log("i worked");
  };

  gridCreator();
});

let randomMode = false;

const randomColorButton = document.querySelector("#randomColorMode");

randomColorButton.addEventListener("click", () => {
  randomMode=!randomMode;
  console.log(randomMode);
  return randomMode;
});


let randomHex = () => {
  const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let hexCode = "#";
  while (hexCode.length < 7) {
    hexCode += digits[Math.round(Math.random()*digits.length)];
  };
  return hexCode;
};





let color = function () {
  let colorValue;
  if (randomMode) {
    colorValue = randomHex();
  } else {
    const colorInputButton = document.querySelector("#userColorSelection");
    colorValue = colorInputButton.value;

    colorInputButton.addEventListener("input", () => {
      colorValue = colorInputButton.value;
      return colorValue;
    });
  };
  return colorValue;
};

const gridSquares = document.querySelectorAll(".squares");

// gridSquares.forEach()

// addEventListener("click", (e) => {
//   e.target[background-color] = `${color()}`;
// });




