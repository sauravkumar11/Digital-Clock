const $ = (selector) => {
    return document.querySelector(selector);
}

const hour = $('.hour');
const min = $('.min');
const dots = document.querySelectorAll('.dot');
const week = $('.week');
const sec = $('.sec');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();
    dots.forEach(dot => {
        if (showDot) {
            dot.classList.add('invisible');
        } else {
            dot.classList.remove('invisible');
        }
    });

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

  // Change color of seconds when it reaches 50
  if (now.getSeconds() >= 50) {
    sec.classList.add('warning');
} else {
    sec.classList.remove('warning');
}

    Array.from(week.children).forEach((day, index) => {
        if (index === now.getDay()) {
            day.classList.add('today');
        } else {
            day.classList.remove('today');
        }
    });
}

// Call the update function every second
setInterval(update, 500);

// Initial call to display the clock immediately
update();