

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
const div8 = document.querySelector(".div8");
const div9 = document.querySelector(".div9");

function style(divs) {
    divs.forEach(div => {
        div.style.backgroundColor = "black";
        div.style.position = "absolute";
    });
}

const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
style(divs);

function divum (div1) {
    div1.style.top = "310px";
    div1.style.left = "200px";
    div1.style.width = "10px";
    div1.style.height = "100px";
}

function divdois (div2) {
    div2.style.top = "200px";
    div2.style.left = "200px";
    div2.style.width = "10px";
    div2.style.height = "100px";
}
function divtres (div3) {
    div3.style.top = "410px";
    div3.style.left = "210px";
    div3.style.width = "100px";
    div3.style.height = "10px";
}
function divquatro (div4) {
    div4.style.top = "410px";
    div4.style.left = "320px";
    div4.style.width = "100px";
    div4.style.height = "10px";
}
function divcinco (div5) {
    div5.style.top = "310px";
    div5.style.left = "420px";
    div5.style.width = "10px";
    div5.style.height = "100px";
}
function divseis (div6) {
    div6.style.top = "200px";
    div6.style.left = "420px";
    div6.style.width = "10px";
    div6.style.height = "100px";
}
function divsete (div7) {
    div7.style.top = "430px";
    div7.style.left = "310px";
    div7.style.width = "10px";
    div7.style.height = "100px";
}
function divoito (div8) {
    div8.style.top = "540px";
    div8.style.left = "310px";
    div8.style.width = "10px";
    div8.style.height = "100px";
}
function divnove (div9) {
    div9.style.top = "300px";
    div9.style.left = "310px";
    div9.style.width = "10px";
    div9.style.height = "50px";
    div9.style.transform = "rotate(30deg)";
    div9.style.backgroundColor = "grey";
}


divum(div1);
divdois(div2);
divtres(div3);
divquatro(div4);
divcinco(div5);
divseis(div6);
divsete(div7);
divoito(div8);
divnove(div9);

function tornarArrastavel(elemento) {
    let offsetX = 0;
    let offsetY = 0;
    let arrastando = false;

    elemento.addEventListener("mousedown", function(e) {
        arrastando = true;
        offsetX = e.clientX - elemento.offsetLeft;
        offsetY = e.clientY - elemento.offsetTop;
        elemento.style.zIndex = 1000; 
    });

    document.addEventListener("mousemove", function(e) {
        if (arrastando) {
            elemento.style.left = (e.clientX - offsetX) + "px";
            elemento.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", function() {
        arrastando = false;
        elemento.style.zIndex = "";
    });
}
tornarArrastavel(div1);
tornarArrastavel(div2);
tornarArrastavel(div3);
tornarArrastavel(div4);
tornarArrastavel(div5);
tornarArrastavel(div6);
tornarArrastavel(div7);
tornarArrastavel(div8);
tornarArrastavel(div9);


