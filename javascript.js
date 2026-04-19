let gridSide = 16;
let sideLength = 10;
let idArr = [];

const container = document.querySelector("#container");
    container.style.maxWidth = (sideLength * gridSide + gridSide - 1) + "px";
for (let i = 1; i <= gridSide; i++) {
    for (let j = 1; j <= gridSide; j++) {
        //create unique id
        idArr.push(i + "-" + j);
        // create grid
        const square = document.createElement("div");
            square.id = i + "-" + j;
            square.classList.add("small-square");
            square.style.width = sideLength + "px";
            square.style.height = sideLength + "px";
        container.appendChild(square);
    };
};