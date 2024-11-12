document.addEventListener('DOMContentLoaded', function() {
    // Get all calendar date elements
    const dates = document.querySelectorAll('.calendar-date');

    // Add click event listener to each date element
    dates.forEach(date => {
        if (!date.classList.contains('greyed')) {
            date.addEventListener('click', function() {
                // Remove the selected class from all dates
                dates.forEach(d => d.classList.remove('selected'));

                // Add the selected class to the clicked date
                this.classList.add('selected');
            });
        }
    });

    // Get all time slot elements
    const timeSlots = document.querySelectorAll('.time-slot');

    // Add click event listener to each time slot element
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            // Remove the selected class from all time slots
            timeSlots.forEach(s => s.classList.remove('selected'));

            // Add the selected class to the clicked time slot
            this.classList.add('selected');
        });
    });
});