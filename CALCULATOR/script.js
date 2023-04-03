let outputscreen = document.getElementById("xyz");
function clr(){
outputscreen.value = ""
}
function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
function display(num){
    outputscreen.value += num;
}
function calc(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch{
        alert("invalid")
    }
}