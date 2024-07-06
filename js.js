const currentTimeUTC = document.getElementById('currentTimeUTC');
const currentDay = document.getElementById('currentDay');

setInterval(() => {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    currentTimeUTC.textContent = utcTime;
    currentDay.textContent = day;
}, 1000);