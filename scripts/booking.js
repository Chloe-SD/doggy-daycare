/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost = document.getElementById("calculated-cost");
const clear = document.getElementById("clear-button");
let rate = 35;
const half_button = document.getElementById("half");
const full_button = document.getElementById("full");

const day_selector = document.querySelector(".day-selector");
const days = day_selector.querySelectorAll("li");
// days returns an array of all "li" elements within ".day-selector". This way I can manipulate class data for these elements more easily



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


// I dont have a day Counter. When I need to know how many days are selected (for recalculating) I simply use querySelector 
// to find the length of the array of clicked buttins within the day-selector list.
days.forEach(day => {
    day.addEventListener("click", () => {
        day.classList.toggle("clicked");
        recalculate();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear.addEventListener("click", () => {
    const selected = document.querySelectorAll(".day-selector .clicked");
    selected.forEach(day => {
        day.classList.remove("clicked");
    });
    if (half_button.classList.contains("clicked")); {
        full_button.classList.add("clicked");
        half_button.classList.remove("clicked");
    }
    rate = 35;
    recalculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half_button.addEventListener("click", () => {
    half_button.classList.add("clicked");
    full_button.classList.remove("clicked");
    rate = 20;
    recalculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_button.addEventListener("click", () => {
    full_button.classList.add("clicked");
    half_button.classList.remove("clicked");
    rate = 35;
    recalculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    const selected = document.querySelectorAll(".day-selector .clicked").length;
    const total = selected * rate;
    cost.textContent = `${total}`;
}
