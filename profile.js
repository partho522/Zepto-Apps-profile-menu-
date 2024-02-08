document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById("user-menu-button");
    const menu = document.querySelector("[aria-labelledby='user-menu-button']");

    // Toggle the visibility of the menu when the profile picture is clicked
    profilePic.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        menu.classList.toggle("hidden"); // Toggle the "hidden" class on the menu
    });

    // Close the menu if clicking outside of it
    document.addEventListener("click", function(event) {
        // Check if the menu is open and if the click occurred outside of it or on the profile picture
        const isMenuOpen = !menu.classList.contains("hidden");
        const isOutsideClick = !menu.contains(event.target) && event.target !== profilePic;

        if (isMenuOpen && isOutsideClick) {
            menu.classList.add("hidden"); // Hide the menu
        }
    });
});
