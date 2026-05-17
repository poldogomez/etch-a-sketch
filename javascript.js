let gridSide = 16; // initial amount of cubes
let standardContainerSide = 500; // 500px

buildGrid(gridSide);

// div for button
const titleElement = document.querySelector('h1');
const btnDiv = document.createElement('div');
    titleElement.appendChild(btnDiv);   

const gridSizeBtn = document.createElement('button');
    gridSizeBtn.textContent = "Set new grid size";
    btnDiv.appendChild(gridSizeBtn);

gridSizeBtn.addEventListener('click', () => {
    let userInput = prompt('How many squares per side?');
    if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
        alert("Must be a number > 0 but <= 100. Please try again.")
    } else {
        return buildGrid(userInput);
    }
});

// build the grid
function buildGrid(gridCubes) {
    
    const container = document.querySelector("#container");
    container.replaceChildren();

    container.style.width = standardContainerSide + "px";
    container.style.height = standardContainerSide + "px";

    const sideLength = standardContainerSide / gridCubes; 

    for (let i = 1; i <= gridCubes; i++) {
        for (let j = 1; j <= gridCubes; j++) {
            // create grid
            const square = document.createElement("div");
                square.classList.add("small-square");
                square.style.width = sideLength + "px";
                square.style.height = sideLength + "px";
            container.appendChild(square);
        };
    };

    const boxes = document.querySelectorAll(".small-square");

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'blue';
        });
        box.addEventListener('click', () => {
            box.style.backgroundColor = 'red';
        });
    });
    return;
}