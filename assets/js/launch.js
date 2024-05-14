let btn1 = document.getElementById('asm1-btn');
let btn2 = document.getElementById('asm2-btn');
let btn3 = document.getElementById('asm3-btn');
let btn4 = document.getElementById('asm4-btn');
let btn5 = document.getElementById('asm5-btn');
let btn6 = document.getElementById('asm6-btn');
let btn7 = document.getElementById('asm7-btn');
let btn8 = document.getElementById('asm8-btn');
let btn9 = document.getElementById('asm9-btn');
let btn10 = document.getElementById('asm10-btn');
let btn11 = document.getElementById('asm11-btn');

let asm1_details = document.getElementsByClassName('asm-details')[0];
let asm2_details = document.getElementsByClassName('asm-details')[1];
let asm3_details = document.getElementsByClassName('asm-details')[2];
let asm4_details = document.getElementsByClassName('asm-details')[3];
let asm5_details = document.getElementsByClassName('asm-details')[4];
let asm6_details = document.getElementsByClassName('asm-details')[5];
let asm7_details = document.getElementsByClassName('asm-details')[6];
let asm8_details = document.getElementsByClassName('asm-details')[7];
let asm9_details = document.getElementsByClassName('asm-details')[8];
let asm10_details = document.getElementsByClassName('asm-details')[9];
let asm11_details = document.getElementsByClassName('asm-details')[10];

let asm1_link = document.getElementsByClassName('asm-links')[0];
let asm2_link = document.getElementsByClassName('asm-links')[1];
let asm3_link = document.getElementsByClassName('asm-links')[2];
let asm4_link = document.getElementsByClassName('asm-links')[3];
let asm5_link = document.getElementsByClassName('asm-links')[4];
let asm6_link = document.getElementsByClassName('asm-links')[5];
let asm7_link = document.getElementsByClassName('asm-links')[6];
let asm8_link = document.getElementsByClassName('asm-links')[7];
let asm9_link = document.getElementsByClassName('asm-links')[8];
let asm10_link = document.getElementsByClassName('asm-links')[9];
let asm11_link = document.getElementsByClassName('asm-links')[10];


asm1_link.style.display = "none";
asm2_link.style.display = "none";
asm3_link.style.display = "none";
asm4_link.style.display = "none";
asm5_link.style.display = "none";
asm6_link.style.display = "none";
asm7_link.style.display = "none";
asm8_link.style.display = "none";
asm9_link.style.display = "none";
asm10_link.style.display = "none";
asm11_link.style.display = "none";

btn1.addEventListener('click', () => {

    if (btn1.innerText === 'View') {
        asm1_link.style.display = "block";
        asm1_details.style.display = "none";
        btn1.innerText = "Back";
    } else {
        asm1_link.style.display = "none";
        asm1_details.style.display = "block";
        btn1.innerText = "View";
    }
});

btn2.addEventListener('click', () => {

    if (btn2.innerText === 'View') {
        asm2_link.style.display = "block";
        asm2_details.style.display = "none";
        btn2.innerText = "Back";
    } else {
        asm2_link.style.display = "none";
        asm2_details.style.display = "block";
        btn2.innerText = "View";
    }
});

btn3.addEventListener('click', () => {

    if (btn3.innerText === 'View') {
        asm3_link.style.display = "block";
        asm3_details.style.display = "none";
        btn3.innerText = "Back";
    } else {
        asm3_link.style.display = "none";
        asm3_details.style.display = "block";
        btn3.innerText = "View";
    }
});

btn4.addEventListener('click', () => {

    if (btn4.innerText === 'View') {
        asm4_link.style.display = "block";
        asm4_details.style.display = "none";
        btn4.innerText = "Back";
    } else {
        asm4_link.style.display = "none";
        asm4_details.style.display = "block";
        btn4.innerText = "View";
    }
});

btn5.addEventListener('click', () => {

    if (btn5.innerText === 'View') {
        asm5_link.style.display = "block";
        asm5_details.style.display = "none";
        btn5.innerText = "Back";
    } else {
        asm5_link.style.display = "none";
        asm5_details.style.display = "block";
        btn5.innerText = "View";
    }
});

btn6.addEventListener('click', () => {

    if (btn6.innerText === 'View') {
        asm6_link.style.display = "block";
        asm6_details.style.display = "none";
        btn6.innerText = "Back";
    } else {
        asm6_link.style.display = "none";
        asm6_details.style.display = "block";
        btn6.innerText = "View";
    }
});

btn7.addEventListener('click', () => {

    if (btn7.innerText === 'View') {
        asm7_link.style.display = "block";
        asm7_details.style.display = "none";
        btn7.innerText = "Back";
    } else {
        asm7_link.style.display = "none";
        asm7_details.style.display = "block";
        btn7.innerText = "View";
    }
});

btn8.addEventListener('click', () => {

    if (btn8.innerText === 'View') {
        asm8_link.style.display = "block";
        asm8_details.style.display = "none";
        btn8.innerText = "Back";
    } else {
        asm8_link.style.display = "none";
        asm8_details.style.display = "block";
        btn8.innerText = "View";
    }
});

btn9.addEventListener('click', () => {

    if (btn9.innerText === 'View') {
        asm9_link.style.display = "block";
        asm9_details.style.display = "none";
        btn9.innerText = "Back";
    } else {
        asm9_link.style.display = "none";
        asm9_details.style.display = "block";
        btn9.innerText = "View";
    }
});

btn10.addEventListener('click', () => {

    if (btn10.innerText === 'View') {
        asm10_link.style.display = "block";
        asm10_details.style.display = "none";
        btn9.innerText = "Back";
    } else {
        asm10_link.style.display = "none";
        asm10_details.style.display = "block";
        btn10.innerText = "View";
    }
});

btn11.addEventListener('click', () => {

    if (btn11.innerText === 'View') {
        asm11_link.style.display = "block";
        asm11_details.style.display = "none";
        btn11.innerText = "Back";
    } else {
        asm11_link.style.display = "none";
        asm11_details.style.display = "block";
        btn11.innerText = "View";
    }
});

