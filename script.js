const gridNum = document.querySelector('#slidergrid');
const gridContainer = document.querySelector('.div-container');
const colorGrid = document.querySelector('#color');
const button = document.querySelector('#button');
const eraser = document.querySelector('#eraser');
const clearAll = document.querySelector('#clear');

// add active hover to the option
const btnContainer = document.querySelector('#option-container');
const hlgt = btnContainer.getElementsByClassName("highlight");
for (let i = 0; i < hlgt.length; i++) {
    hlgt[i].addEventListener('click', function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            console.log("active exist")
            current[0].className = current[0].className.replace(" active", "");
        }
        console.log("active not")
        console.log(this.className)
        this.className += " active";
    })
}

function gridHandle() {
    console.log('change grid')
    //update label sesuai dengan jumlah grid
    const labelGrid = document.querySelector('#label-grid')
    labelGrid.textContent =`Grid Number: ${this.value} x ${this.value}`;

    // update css variabel sesuai dengan jumlah grid
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
    document.documentElement.style.setProperty('--grid-rows', this.value);
    //console.log((this.value))
    //remove initial grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // make a div with the same number of the grid
    for (let i = 0; i < (parseInt(this.value)** 2); i++) {

        const divGrid = document.createElement('div');
        //divGrid.textContent = i + 1;
        divGrid.setAttribute('class', 'grid')
        gridContainer.appendChild(divGrid);
    };
};

function gridColor() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => grid.addEventListener('mouseover', () => {
        console.log('change gridcolor')
        grid.style.cssText = `background-color: ${this.value}`;
    }))
};

function rainbowColor() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(gridRainbow => gridRainbow.addEventListener('mouseover', () => {
        console.log('click rainbow')
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        console.log(`background-color: rgb(${r}, ${g}, ${b})`)
        gridRainbow.style.cssText = `background-color: rgb(${r}, ${g}, ${b})` 
    }))
}

function eraseColor() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => grid.addEventListener('mouseover', () => {
        console.log('erase Color')
        grid.style.cssText = 'background-color: #fcfcfc;'
    }))
};

function clearGrid() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => grid.removeAttribute('style'))
    console.log('clear')                 
};

const gridNum2 = gridNum.addEventListener('change', gridHandle);
console.log(gridNum.value)
const gridColorHandle = colorGrid.addEventListener('click', gridColor);
const buttonHandle = button.addEventListener('click', rainbowColor);
const eraserHandle = eraser.addEventListener('click', eraseColor);
const clearHandle = clearAll.addEventListener('click', clearGrid);
