var date=document.getElementById("Date");
var event=document.getElementById("Event");
var mail=doucment.getElementById("Email");
var done=document.getElementsByTagName("button");
var quote=document.getElementById("quote")

// this here is to validate
function validate(){
    quote.innerHTML("this is a quote")
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("Date").setAttribute("min", today);
}