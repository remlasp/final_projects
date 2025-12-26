
const display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input; // will add chr to the display
}
function clearDisplay(){
    display.value = ""; //get the value then clear
}
function calculate(){
    try{
        display.value = eval(display.value); //get the value, eval for like built in cal for js ex:1+1+1
    }
    catch(e){
        display.value = "ERROR"; // for syntax error
    }

}