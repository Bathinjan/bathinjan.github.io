// Use querySelector to grab the hour, minute and second hands
// Query using the class name:
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");

const digitalHour = document.querySelector(".digitalHour");
const digitalMinute = document.querySelector(".digitalMinute");
const digitalSecond = document.querySelector(".digitalSecond");
const digitalMeridiem = document.querySelector(".digitalMeridiem");

let is12Hour = true;

const convertButton = document.querySelector('.convertButton');

// Function to update the clock's hands
function updateClock() {
    
    // Obtain the current date using Date() and store in object
    const currentDate = new Date();

    // parse string information: only need to obtain hour, minute, and second
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Set the degrees
    const hourDegree = (currentHour / 12) * 360;
    const minuteDegree = (currentMinute / 60) * 360;
    const secondDegree = (currentSecond / 60) * 360;

    // change degrees dynamically using elements from querySelector()
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

// Function to update the digital clock's numbers
function updateDigitalClock() {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    // Convert Meridiem to AM / PM
    if (currentHour >= 12) {
        digitalMeridiem.innerText = "PM";
    }

    else {
        digitalMeridiem.innerText = "PM";
    }

    // 12 hour format
    if (is12Hour){
        if (currentHour > 12){
            currentHour = currentHour - 12;
        }

        // Set "00" to "12"
        if (currentHour === 00){
            currentHour = 12;

        }

        // render hour with Zeroes conversion
        digitalHour.innerText = convertZeroes(currentHour);
    }

    // 24 hour format
    else {
        // render hour without zeroes conversion
        digitalHour.innerText = currentHour;
    }

    // Render rest of numbers
    digitalMinute.innerText = convertZeroes(currentMinute);
    digitalSecond.innerText = convertZeroes(currentSecond);
}

// Convert any number less than 10 to prepend a 0
function convertZeroes(num) {
    if (num < 10){
        return "0" + num;
    }

    else {
        return num;
    }
}

// Function to convert the time to 12 or 24 hour time (button)
function convertTime() {
    if(is12Hour) {
        is12Hour = false;
        // set the button's text
        convertButton.innerText = 'Convert to 12 hour';
    }

    else if(!is12Hour) {
        is12Hour = true;
        // set the button's text
        convertButton.innerText = 'Convert to 24 hour';
    }
}

// set the function(s) to run every second with setInterval()
setInterval(updateClock, 1000);
setInterval(updateDigitalClock, 1000)