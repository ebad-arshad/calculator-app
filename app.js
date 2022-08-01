var buttonValue = document.getElementById("main-input");
var answerStore = 0;
function buttonCLicked(a) {
    buttonValue.value += a;
    var lastIndex = buttonValue.value.length - 1;
    if (buttonValue.value[lastIndex] === "+" || buttonValue.value[lastIndex] === "-" || buttonValue.value[lastIndex] === "*" || buttonValue.value[lastIndex] === "/") {
        document.getElementById("id1").setAttribute("disabled", "disabled");
        document.getElementById("id2").setAttribute("disabled", "disabled");
        document.getElementById("id3").setAttribute("disabled", "disabled");
        document.getElementById("id4").setAttribute("disabled", "disabled");
        document.getElementById("id5").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("id1").removeAttribute("disabled", "disabled");
        document.getElementById("id2").removeAttribute("disabled", "disabled");
        document.getElementById("id3").removeAttribute("disabled", "disabled");
        document.getElementById("id4").removeAttribute("disabled", "disabled");
        document.getElementById("id5").removeAttribute("disabled", "disabled");
    }
    if (buttonValue.value[lastIndex] === ".") {
        document.getElementById("id6").setAttribute("disabled", "disabled");
    } else if (buttonValue.value[lastIndex] === "+" || buttonValue.value[lastIndex] === "-" || buttonValue.value[lastIndex] === "*" || buttonValue.value[lastIndex] === "/") {
        document.getElementById("id6").removeAttribute("disabled", "disabled");
    }
}

function allClear() {
    document.querySelector("p").innerHTML = "";
    buttonValue.value = "";
}
function clearLastIndex() {
    buttonValue.value = buttonValue.value.slice(0, buttonValue.value.length - 1);
    document.getElementById("id1").removeAttribute("disabled", "disabled");
    document.getElementById("id2").removeAttribute("disabled", "disabled");
    document.getElementById("id3").removeAttribute("disabled", "disabled");
    document.getElementById("id4").removeAttribute("disabled", "disabled");
    document.getElementById("id5").removeAttribute("disabled", "disabled");
}
function squareRoot() {
    buttonValue.value = Math.sqrt(buttonValue.value).toFixed(6);
}
function answer() {
    if (buttonValue.value === "") {
        buttonValue.value = answerStore;
    }
    else {
        return;
    }
}
function equalTo() {
    if (buttonValue.value === "") {
        return;
    }
    else {
        for (i = 0; i < buttonValue.value.toString().length; i++) {
            if (buttonValue.value[i] === "+" || buttonValue.value[i] === "-" || buttonValue.value[i] === "*" || buttonValue.value[i] === "/") {
                document.querySelector("p").innerHTML = buttonValue.value + " =";
                break;
            }
        }
        answerStore = eval(buttonValue.value);
        buttonValue.value = eval(buttonValue.value);
    }
}