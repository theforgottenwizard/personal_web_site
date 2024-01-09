
let buttons = document.getElementsByClassName("akordiyon");

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
       
        let panel = this.nextElementSibling;
        if(panel.style.display === "none"){
            panel.style.display = "block";
        }else{
            panel.style.display = "none";
        }
    })
}   