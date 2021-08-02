var tabcontent=document.getElementsByClassName("tabcontent");
var tablink=document.getElementsByClassName("tablink");

function openCity(x,y,color) {
    for (let i = 0; i < tabcontent.length; i++) {
        
        tabcontent[i].style.display="none";
    }
    for (let i = 0; i < tablink.length; i++) {
         tablink[i].style.background="";
        
    }
    x.style.background=color;
    document.getElementById(y).style.display="block";
}
document.getElementById("def").click();




