const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById('monthYear');
    const datesContainer = document.getElementById('dates');

    // Clear previous dates
    datesContainer.innerHTML = '';

    // Get the current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Set the month and year in the header
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty divs for days of the previous month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesContainer.appendChild(emptyDiv);
    }

    // Add the days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = day;
        dateDiv.classList.add('date');
        dateDiv.onclick = () => alert(`Selected date: ${day} ${monthNames[month]} ${year}`);
        datesContainer.appendChild(dateDiv);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}

// Initial render
renderCalendar();