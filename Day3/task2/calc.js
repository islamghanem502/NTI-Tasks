let exp = '';

function EnterNumber(value){
    exp+=value;
    document.getElementById("Answer").value = exp;
}


function EnterOperator(op){
    exp+=op;
    document.getElementById("Answer").value = exp;
}

function EnterEqual() {
    try {
        const rus = eval(exp);
        document.getElementById("Answer").value = rus;
        exp = rus.toString();
    }catch(e) {
        document.getElementById("Answer").value = "🤬🤬🤬";
        exp = "";
    }
}

function EnterClear() {
    exp = "";
    document.getElementById("Answer").value = "";
}






