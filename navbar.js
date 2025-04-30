function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// NOUVEAU : fermer le menu quand on clique sur un lien (hors icône)
document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById("myTopnav");
    // tous les <a> sauf celui à class="icon"
    var links = nav.querySelectorAll('a:not(.icon)');
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            // si le menu est ouvert (mode .responsive), on le ferme
            if (nav.classList.contains("responsive")) {
                nav.className = "topnav";
            }
        });
    });
});