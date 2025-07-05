//Menambah data di display
function appendValue(value){
    document.getElementById('display').value += value;
}

//Clear data di display
function clearDisplay(){
    document.getElementById('display').value = "";
}

//Menghitung value data
function calculate(){
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error"
    }
}