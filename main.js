const container = document.querySelector("#container");
container.setAttribute("style", "width: 500px; height: 500px; display: flex; flex-direction: column; margin: auto;")

const button = document.createElement("button");
button.classList.add("reset");
button.innerText = 'Click Me To Reset!';

const rowDiv = document.createElement("div");
rowDiv.setAttribute("style", "flex-grow: 1; width: 100%; display: flex; flex-direction: row; justify-content: center;");
rowDiv.classList.add("row")

const box = document.createElement("div");
box.classList.add("box")
box.setAttribute("style", "flex-grow: 1; height: 100%;")


container.appendChild(button)


function insertRows(dimension){
    for (let i = 0; i < dimension; i++){
        container.appendChild(rowDiv.cloneNode(true));
    }
}

function insertBoxes(dimension){
    const rows = document.querySelectorAll("div.row");
    rows.forEach((row) => {
        for (let i = 0; i < dimension; i++){
            row.appendChild(box.cloneNode(true));
        }
    })
}

function selectColour(){
    let r = Math.floor(Math.random*256);
    let g = Math.floor(Math.random*256);
    let b = Math.floor(Math.random*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function run(){
    const DIMENSION = prompt("Please enter dimensions:", "5");
    insertRows(DIMENSION);
    insertBoxes(DIMENSION);
    const boxes = document.querySelectorAll("div.box");
    boxes.forEach((boxx) => {
        boxx.addEventListener(
            "mouseenter", () => {
                let r = Math.floor(Math.random()*256);
                let g = Math.floor(Math.random()*256);
                let b = Math.floor(Math.random()*256);
                boxx.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        )
    })
    container.appendChild(button)

}

document.querySelector(".reset").addEventListener('click', () => {
    document.querySelector("#container").innerHTML = ""
    run();
});

run();
