const container = document.querySelector(".container");
const resizeButton = document.querySelector(".size");
const resetButton = document.querySelector(".reset");

// creating initial 16x16 grid
function createGrid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.padding = "30px";
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });
    }
}
createGrid();

resetButton.addEventListener("click", () => {
    for (const child of container.children) {
        child.classList.remove("hover");
    }
});


// Had to use an anonymous function to resize the grid on click, original resize function was being called
// immediately on page load which I didn't want
resizeButton.addEventListener("click", () => {
    let num = gridSize();
    const gridArea = 960 * 960; // grid is 960px wide and 960px tall
    let numSquares = num * num; // how many squares are in the grid
    let squareArea = gridArea / numSquares; // divide our gridArea by our desired grid size to determine the area of each square in the grid
    let squarePadding = (Math.sqrt(squareArea)) / 2; // take square root of area to figure out square length and width then divide by 2 to get padding value
    // removing old grid by looping through container and deleting last element until empty
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    // create new grid
    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.padding = squarePadding + "px";
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });
    }
});

function gridSize() {
    let gridSize = prompt("Enter a desired grid size between 16 and 100: ");
    while (gridSize < 16 || gridSize > 100) {
        gridSize = prompt("Enter a valid grid size between 16 and 100: ");
    }
    return gridSize;
}
