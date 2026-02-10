window.navbarInitAutoClose = () => {
    const nav = document.querySelector(".tic-navbar");
    const collapseEl = document.getElementById("mainNav");

    if (!nav || !collapseEl || typeof bootstrap === "undefined") return;

    // IMPORTANT: prevent bootstrap from auto-toggling open on init
    const collapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });

    // Close when clicking outside the navbar
    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && collapseEl.classList.contains("show")) {
            collapse.hide();
        }
    });

    // Close when clicking a nav link inside the menu
    nav.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (collapseEl.classList.contains("show")) {
                collapse.hide();
            }
        });
    });
};
