// User-defined module to get the current date and time
export function getCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);

    // Display the current date and time in the 'datetime' paragraph
    document.getElementById('datetime').innerText = formattedDateTime;
}

// Call the function to display the current date and time when the page loads
window.onload = getCurrentDateTime;
