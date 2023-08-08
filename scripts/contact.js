// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submit = document.getElementById("submit-button");
const main = document.getElementById("contact-page");



submit.onclick = function() {
    const user = document.getElementById("user-name").value.length;
    const email = document.getElementById("user-email").value.length;
    const text = document.getElementById("user-message").value.length;

    if (user === 0 || email === 0 || text === 0) {
        alert("missing info");
    } else {
    main.innerHTML = '<p style="font-size:24px",>Thank you for your message!</p>';
    }
};
