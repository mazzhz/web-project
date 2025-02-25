function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header-container", "partials/header.html");
    loadComponent("navbar-container", "partials/navbar.html");
    loadComponent("footer-container", "partials/footer.html");
});