document.addEventListener("DOMContentLoaded", function() {
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.querySelector("nav ul");

    // Open menu
    openMenu.addEventListener("click", () => {
        navLinks.classList.add("show");
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
        navLinks.classList.remove("show");
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    });

    // ✅ Reset icons when resizing to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("show");
            openMenu.style.display = "none";  // hide bars
            closeMenu.style.display = "none"; // hide close
        } else {
            openMenu.style.display = "block"; // show bars on mobile
            closeMenu.style.display = "none"; // hide close on mobile
        }
    });
});