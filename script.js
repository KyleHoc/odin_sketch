const container = document.getElementById("grid-container");
const btn = document.getElementById("reset");
btn.addEventListener('click', function() {
    newGrid();
});

function makeGrid(col, row){
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    for(x = 0; x < (col*row); x++){
        let cell = document.createElement('div');
        container.appendChild(cell).id = "grid-item";
        cell.addEventListener('mouseover', () =>{
            cell.style.backgroundColor = "black";
        });
    }
}

function newGrid(){
    let newVal = prompt("How many rows and columns would you like the new grid to have? (MAX: 100)");
    makeGrid(newVal, newVal);
}


makeGrid(64, 64);