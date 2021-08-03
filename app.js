function my() {
    var input,ul,li,a,i;
    input=document.getElementById("mysearch").value.toUpperCase();
    ul=document.getElementsByClassName("list")[0];
    
    li=ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
         a= li[i].getElementsByTagName("a")[0];
         if(a.innerText.toUpperCase().indexOf(input)>-1){
             a.style.display="";
         }
        else{
            a.style.display="none";
        }
    }
}



