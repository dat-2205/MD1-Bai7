// function clear(){
//      document.getElementById("output").innerHTML = "11111";
//
// }
function ACbutton() {
    document.getElementById("output").innerHTML = '0';
}
function removezero(){
    let dispplay = document.getElementById("output").innerHTML;
    if(dispplay=="0"){
        dispplay = " ";
        document.getElementById("output").innerHTML = dispplay
    }
}
function getchar(value){
    removezero()
    document.getElementById("output").innerHTML += value;
}
function getpercent(){
    removezero()
    let percent = document.getElementById("output").innerHTML;
    let p2 = percent/100;
    document.getElementById("output").innerHTML = p2;
}
function math(){
    debugger
    removezero()
    let getnum = document.getElementById("output").innerHTML;
    let result = eval(getnum);
    document.getElementById("output").innerHTML = result;
}