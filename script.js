document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});


document.querySelector('main').addEventListener('click', function() {
    alert('Main section clicked!');
});

