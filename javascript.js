let gridSide = 32;
let sideLength = 10;

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
    }
});

    
const container = document.querySelector("#container");
    // set max width
    container.style.maxWidth = (sideLength * gridSide + gridSide - 1) + "px";
for (let i = 1; i <= gridSide; i++) {
    for (let j = 1; j <= gridSide; j++) {
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
    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'blue';
    });
});
