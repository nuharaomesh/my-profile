
const input = document.getElementById('value');
const showLbl = document.getElementById('math');
console.log(showLbl)

function showToDisplay(val) {
    input.value += val;
}

function clearAll() {
    input.value = "";
}

function solve() {

    showLbl.innerText = input.value;

    try {
        input.value = eval(input.value);
    }
    catch (err) {
        input.value = err;
    }
}