let gridSide = 16;

const container = document.querySelector("#container");
    container.style.maxWidth = (10 * gridSide + gridSide - 1) + "px";
for (let i = 0; i < gridSide; i++) {
    for (let j = 0; j < gridSide; j++) {
        const square = document.createElement("div");
            square.classList.add("small-square");
        container.appendChild(square);
    };
};