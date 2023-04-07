const splitBtn = document.getElementById("splitBtn");
const inputNumber = document.getElementById("number");
const numberOfSplits = document.getElementById("splits");
const resultContainer = document.getElementById("container");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 15)
        ];
    }
    return hex;
}

function split() {
    resultContainer.textContent="";
    const number = inputNumber.value;
    const splits = numberOfSplits.value;
    
    if(splits>number)
    {
        const b=document.createElement("b");
        b.textContent="No of Splits should not be greater than the no";
        b.classList.add("error");
        resultContainer.append(b);
        return;
        
    }

    if(splits<0){
        const p = document.createElement("p");
        p.textContent="Invalid number of splits";
        p.classList.add("error");
        resultContainer.append(p);
    }
    let remaining = number;
    for (let i = 0; i < splits; i++) {
        const width = Math.ceil(remaining / (splits - i));
        const div = document.createElement("div");
        div.classList.add("split");
        div.style.backgroundColor = getRandomColor();
        div.style.flex = width;
        div.innerHTML = width;
        resultContainer.appendChild(div);
        remaining = remaining - width;
    }
    inputNumber.value = "";
    numberOfSplits.value = "";
}
splitBtn.addEventListener("click", split);