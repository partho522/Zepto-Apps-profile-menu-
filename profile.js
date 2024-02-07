document.addEventListener("DOMContentLoaded", function() {
    const userMenuButton = document.getElementById("user-menu-button");
    const profileMenu = userMenuButton.nextElementSibling;

    userMenuButton.addEventListener('click',function()){
        profileMenu.classList.toggle("show-profileMenu")
    });

    userMenuButton.addEventListener("click", function() {
        profileMenu.classList.toggle("hide-profileMenu");
    });
});

