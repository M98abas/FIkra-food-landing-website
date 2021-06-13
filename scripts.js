var checkBtn = document.querySelector("#hamburgerBtn");
var menuShow = document.querySelector("#menuSHow");

function handelClick(){
    if(checkBtn.className == "hamburger hamburger--spin is-active" ) 
    {
        checkBtn.className ="hamburger hamburger--spin";
        menuShow.className="hamburger-menu";
        
    }
    else 
    {
        checkBtn.classList+=" is-active";
        menuShow.classList+=" active";
        
    }
}