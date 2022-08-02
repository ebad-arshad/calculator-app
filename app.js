var buttonValue = document.getElementById("main-input");
var answerStore = 0;
function buttonCLicked(a) {
    var lastIndex = buttonValue.value.length - 1;
    if ((buttonValue.value[lastIndex] === "+" || buttonValue.value[lastIndex] === "-" || buttonValue.value[lastIndex] === "*" || buttonValue.value[lastIndex] === "/") && (a === "+" || a === "-" || a === "*" || a === "/")) {
        buttonValue.value = buttonValue.value.slice(0, lastIndex) + a;
    } else {
        buttonValue.value += a;
    }
    for (i = 0; i < buttonValue.value.length; i++) {
        if (buttonValue.value[i] === ".") {
            document.getElementById("id1").setAttribute("disabled", "disabled")
        }
        else if (buttonValue.value[i] === "+" || buttonValue.value[i] === "-" || buttonValue.value[i] === "/" || buttonValue.value[i] === "*") {
            document.getElementById("id1").removeAttribute("disabled", "disabled")
        }
    }
}

function allClear() {
    document.querySelector("p").innerHTML = "";
    buttonValue.value = "";
    document.getElementById("id1").removeAttribute("disabled", "disabled")
}
function clearLastIndex() {
    if (buttonValue.value[buttonValue.value.length - 1] === ".") {
        document.getElementById("id1").removeAttribute("disabled", "disabled")
    }
    buttonValue.value = buttonValue.value.slice(0, buttonValue.value.length - 1);
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
    document.querySelector("p").innerHTML = buttonValue.value + " =";
    var flag = false;
    if (buttonValue.value === "" || (buttonValue.value[buttonValue.value.length - 1] === "+" || buttonValue.value[buttonValue.value.length - 1] === "-" || buttonValue.value[buttonValue.value.length - 1] === "/" || buttonValue.value[buttonValue.value.length - 1] === "*")) {
        return;
    }
    answerStore = eval(buttonValue.value);
    for (i = 0; i < answerStore.toString().length; i++) {
        if (answerStore.toString()[i] === ".") {
            buttonValue.value = eval(buttonValue.value).toFixed(6);
            answerStore = eval(buttonValue.value).toFixed(6);
            flag = true;
            document.getElementById("id1").setAttribute("disabled", "disabled")
            break;
        }
        document.getElementById("id1").removeAttribute("disabled", "disabled")
    }
    if (flag === false) {
        buttonValue.value = eval(buttonValue.value);
    }
}