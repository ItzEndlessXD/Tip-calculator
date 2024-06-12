window.onload = () => {
    const amountInput = document.getElementById("amountInput");

    const totalPeople = document.getElementById("totalPeople");

    const customAmount = document.getElementById("customAmount");

    const outputTipValue = document.getElementById("outputTip");

    const outputTotalValue = document.getElementById("outputTotal");

    const resetBtn = document.getElementById("resetBtn");

    const labelError = document.getElementById("labelTotalPP");

    customAmount.oninput = function() {
        let customAmountValue = customAmount.value;
        if (customAmountValue > 0 && customAmountValue <= 100) {
            tipPercentage = customAmount.value / 100;
            selectionLoop()
            calc()
        }
        else if (customAmountValue > 100) {
            customAmount.value = 100;
        }
        else if( customAmountValue < 0) {
            customAmount.value = null
        }
        else {
            customAmount.value = null
            calc()
        }
        
    }
    amountInput.oninput = function() {
        amountValue = amountInput.value;
        
        if (totalPeople.value == 0) {
            labelError.classList.add("popuplabelTotalPP");
            totalPeople.style.borderColor = "#d67762";
            totalPeople.style.borderStyle = "solid";
            totalPeople.style.borderWidth = "1px"
        }
        else if (totalPeople.value > 0) {
            labelError.classList.remove("popuplabelTotalPP");
        };
        if (amountValue > 0 && amountValue <= 999999) {
            calc()
        }
        else if (amountValue < 0) {
            amountInput.value = 0;
        }
        else if(amountValue > 999999) {
            amountInput.value = 999999;
        }else {
            amountInput.value = null;
            calc()
        }
    }
    totalPeople.oninput = function() {
        peopleValue = totalPeople.value;
        
        if (totalPeople.value > 0 && totalPeople.value <= 100) {
            labelError.classList.remove("popuplabelTotalPP");
            totalPeople.style.border = "none";
            calc()
        }else if (totalPeople.value > 100) {
            totalPeople.value = 100;
        }else if (totalPeople.value < 0 ) {
            totalPeople.value = null;
        }else {
            totalPeople.value = null;
            calc()
        }
    }
    setInterval(outputDisplay, 200)
    function outputDisplay() {
        outputTipValue.innerHTML = `${"$"}${tipValue.toFixed(2)}`;
        outputTotalValue.innerHTML = `${"$"}${totalValue.toFixed(2)}`;
    }
    resetBtn.onclick = function() {
        tipValue = 0.00;
        totalValue = 0.00;
        tipPercentage = 0;
        amountValue = 0;
        peopleValue = 0;
        amountInput.value = null;
        customAmount.value = null;
        totalPeople.value = null;
        selectionLoop()
    }
}


let tipPercentage = 0;
let amountValue = 0;
let peopleValue = 0;
let tipValue = 0.00;
let totalValue = 0.00;

function selectTip(percent) {
    tipPercentage = percent.value;
}

function selected(value) {
    selectionLoop()
    document.getElementById(value).style.backgroundColor = "#9FE8DF";
    document.getElementById(value).style.color = "hsl(183, 100%, 15%)";
    customAmount.value = null;
}
function selectionLoop() {
    for (let i = 1; i <= 5; i++) {
        let id = "selected" + i;
        document.getElementById("selected" + i).style.backgroundColor = "#00474B";
        document.getElementById("selected" + i).style.color = "#e7e8e8";
    }
}
function calc() {
    if (peopleValue > 0 && peopleValue <= 100 && amountValue > 0 && amountValue <= 999999 && tipPercentage != 0) {
        amountValue = amountInput.value;
        peopleValue = totalPeople.value;
        tipValue = (Number(amountValue) * Number(tipPercentage)) / Number(peopleValue);
        totalValue = (Number(amountValue) * (1 + Number(tipPercentage))) / Number(peopleValue);
    }
    else if (amountValue == 0) {
        tipValue = 0.00;
        totalValue = 0.00;
    }
}