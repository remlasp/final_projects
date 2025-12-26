// Reference to the display element
const display = document.getElementById("display"); 

// Variables to control the stopwatch
let timer = null;       // Holds the interval ID returned by setInterval
let startTime = 0;      // Timestamp when the stopwatch was started
let elapsedTime = 0;    // Total elapsed time in milliseconds
let isRunning = false;  // Flag to check if the stopwatch is currently running

// Start the stopwatch
function start() {
    if (!isRunning) { 
        // Calculate start time based on previously elapsed time
        startTime = Date.now() - elapsedTime;

        // Begin updating the display every 10 milliseconds
        timer = setInterval(update, 10);

        // Mark stopwatch as running
        isRunning = true;
    }
}

// Stop/pause the stopwatch
function stop() {
    if (isRunning) {
        
        // Stop the interval updates
        clearInterval(timer);

        // Update elapsedTime to preserve the current stopwatch value
        elapsedTime = Date.now() - startTime;

        // Mark stopwatch as not running
        isRunning = false;
    }
}

// Reset the stopwatch to zero
function reset() {
    // Stop any ongoing interval
    clearInterval(timer);

    // Reset all timing variables
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    // Reset display
    display.textContent = "00:00:00:00";
}

// Update the stopwatch display
function update() {
    
    const currentTime = Date.now();

    // Calculate total elapsed time since start
    elapsedTime = currentTime - startTime;

    // Convert elapsed time to hours, minutes, seconds, and centiseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Add leading zeros for consistent two-digit formatting
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
