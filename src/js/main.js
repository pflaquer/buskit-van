import home from "./views/home.js";
import geo from "./views/geo.js";
import settings from "./views/settings.js";

const routes = {
    "/": { title: "Home", render: home },
    "/geo": { title: "Geo", render: geo },
    "/settings": { title: "Settings", render: settings },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
