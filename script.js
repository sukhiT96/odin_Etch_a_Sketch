const grid = document.querySelector("#grid");
const gridHeight = grid.offsetHeight -2;
const gridWidth = grid.offsetWidth - 2;

let gridInput = document.querySelector("#userGridSelection");

function gridCreator () {
  function gridValue () {
    return gridInput.value;
  };

  let gridSize = parseInt(gridValue());
  let noOfSquares = gridSize*gridSize;
  let height = 100/gridSize;

  function renderGrid () {
    for (let i = 0; i < noOfSquares; i ++) {
      const paintingDivs = document.createElement("div");
      paintingDivs.setAttribute(`style`, `height: ${height}%; aspect-ratio: 1; border: 0px black solid; flex: 1 1 0; backgroundColor: transparent; opacity: 0.5`);
      paintingDivs.classList.add("squares", "active");
      paintingDivs.addEventListener("click", (e) => {
        e.target.style.backgroundColor = `${color()}`;
      })
      paintingDivs.set
      grid.appendChild(paintingDivs);
    };
  };

  renderGrid();
};

gridCreator();

gridInput.addEventListener("click", () => {
  for (let i = grid.childElementCount; i >0; i--) {
    grid.removeChild(grid.firstChild);
  };

  gridCreator();
});

const outlineToggle = document.querySelector("#toggleGridlines");




let outline = true;

outlineToggle.addEventListener("click", () => {
  const outlineItems = document.querySelectorAll(".squares"); // Move inside to get updated list
  outlineItems.forEach(item => {
    item.classList.toggle("active");
  });
});

let randomMode = false;

const randomColorButton = document.querySelector("#randomColorMode");

randomColorButton.addEventListener("click", () => {
  randomMode=!randomMode;
  randomColorButton.classList.toggle("randomActive");
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

grid.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = color();
  if (e.target.style.opacity < 1) {
    e.target.style.opacity = 1.1 * (e.target.style.opacity);  
  } else {e.target.style.opacity = 1;};
});


const erase = document.querySelector("#reset");

erase.addEventListener("click", () => {
  for (let i = grid.childElementCount; i >0; i--) {
    grid.removeChild(grid.firstChild);
  };

  gridCreator();  
})



// grid.addEventListener("mouseout", (e) => {
//   e.target.style.backgroundColor = "initial";
// });


// gridSquares.forEach()

// addEventListener("click", (e) => {
//   e.target[background-color] = `${color()}`;
// });




