// DOM References
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const resetButton = document.getElementById("resetButton");
const inputs = document.querySelectorAll(".inputs");

// Event Listeners for Mouseover (Change Color)
[btn1, btn2, btn3, btn4].forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#007BFF";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#4CAF50";
    });
});

// Event Listeners for Focus and Blur
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid #007BFF";
    });

    input.addEventListener("blur", () => {
        input.style.border = "1px solid #ccc";
    });
});

// Conversion Functions
btn1.addEventListener("click", () => {
    var US_CAD = parseFloat(document.getElementById("input1").value);
    var ans1 = US_CAD * 1.37;
    document.getElementById('result1').innerHTML = `${ans1.toFixed(2)} CAD`;
});

btn2.addEventListener("click", () => {
    var CAD_US = parseFloat(document.getElementById("input2").value);
    var ans2 = CAD_US * 0.73;
    document.getElementById('result2').innerHTML = `${ans2.toFixed(2)} USD`;
});

btn3.addEventListener("click", () => {
    var US_INR = parseFloat(document.getElementById("input3").value);
    var ans3 = US_INR * 83.50;
    document.getElementById('result3').innerHTML = `${ans3.toFixed(2)} INR`;
});

btn4.addEventListener("click", () => {
    var INR_US = parseFloat(document.getElementById("input4").value);
    var ans4 = INR_US * 0.012;
    document.getElementById('result4').innerHTML = `${ans4.toFixed(2)} USD`;
});

// Reset Button to Clear All Fields
resetButton.addEventListener("click", () => {
    inputs.forEach(input => input.value = '');
    document.getElementById('result1').innerHTML = "output";
    document.getElementById('result2').innerHTML = "output";
    document.getElementById('result3').innerHTML = "output";
    document.getElementById('result4').innerHTML = "output";
});
