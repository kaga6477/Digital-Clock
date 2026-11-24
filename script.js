
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("time").innerText =
        `${hours}:${minutes}:${seconds}`;

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    document.getElementById("date").innerText =
        now.toLocaleDateString('en-IN', options);
}
// Dark and Light Mode

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}

// Update every second
updateClock();
setInterval(updateClock, 1000);