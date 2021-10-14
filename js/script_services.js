


var handler = function(event){
    // if the target is a descendent of container do nothing
    if($(event.target).is(".burger-menu, .burger-menu *")) return;

    // remove event handler from document
    // $(document).off("click", handler);

    // dostuff
    var myLinks = document.getElementById("myLinks");
    var burgerMenu = document.getElementById("burger-menu");
    myLinks.style.display = "none";
    burgerMenu.style.backgroundColor = "transparent";

}

$(document).on("click", handler);

//------------------------------------------------------------------------------

function navBurger() {
    var myLinks = document.getElementById("myLinks");
    var burgerMenu = document.getElementById("burger-menu");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        burgerMenu.style.backgroundColor = "transparent";
    } else {
        myLinks.style.display = "block";
        burgerMenu.style.backgroundColor = "rgb(37, 146, 37)";
        
    }
}

//------------------------------------------------------------------------------
