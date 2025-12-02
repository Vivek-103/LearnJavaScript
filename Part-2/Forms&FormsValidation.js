// FORMS & FORM VALIDATION IN JAVASCRIPT — COMPLETE GUIDE
// -----------------------------------------------------------
// This file teaches EVERYTHING about HTML Forms, JS Form Handling,
// Validation (Basic → Advanced), Best Practices, and FAQs.
// At the end: Top Interview Questions + Solutions.


// -----------------------------------------------------------
// 1. WHAT IS A FORM?
// -----------------------------------------------------------
// Forms collect user input: login, signup, search, upload...
// Example (HTML reference):
// <form id="myForm">
//   <input type="text" id="username" />
//   <button>Submit</button>
// </form>
// JS allows you to handle form submission, validation, errors, etc.


// -----------------------------------------------------------
// 2. BASIC FORM ACCESS IN JS
// -----------------------------------------------------------
// You get form and inputs using:
// document.getElementById
// document.querySelector

const form = document.getElementById("myForm");
const username = document.getElementById("username");

// You must prevent default submission to control it
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Form submitted but prevented for validation.");
    });
}


// -----------------------------------------------------------
// 3. BASIC REQUIRED FIELD VALIDATION
// -----------------------------------------------------------
function validateRequired(input){
    if(input.value.trim() === ""){
        return false;
    }
    return true;
}

// Example usage
//type ValidationResult = boolean;

function showError(input, message){
    let errorEl = input.nextElementSibling;
    if(errorEl) errorEl.textContent = message;
}

function clearError(input){
    let errorEl = input.nextElementSibling;
    if(errorEl) errorEl.textContent = "";
}


// -----------------------------------------------------------
// 4. EMAIL VALIDATION
// -----------------------------------------------------------
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

function validateEmail(input){
    return emailRegex.test(input.value.trim());
}


// -----------------------------------------------------------
// 5. PASSWORD VALIDATION
// -----------------------------------------------------------
// Basic: 8+ characters
// Advanced: Uppercase, lowercase, number, special symbol

function validatePasswordBasic(pw){
    return pw.value.length >= 8;
}

function validatePasswordStrong(pw){
    const val = pw.value;
    return (
        val.length >= 8 &&
        /[A-Z]/.test(val) &&
        /[a-z]/.test(val) &&
        /[0-9]/.test(val) &&
        /[^A-Za-z0-9]/.test(val)
    );
}


// -----------------------------------------------------------
// 6. CONFIRM PASSWORD VALIDATION
// -----------------------------------------------------------
function validateConfirmPassword(pw, confirmPw){
    return pw.value === confirmPw.value;
}


// -----------------------------------------------------------
// 7. PHONE NUMBER VALIDATION
// -----------------------------------------------------------
// (Simple validation):
const phoneRegex = /^[0-9]{10}$/;

function validatePhone(input){
    return phoneRegex.test(input.value);
}


// -----------------------------------------------------------
// 8. LENGTH CHECK VALIDATION
// -----------------------------------------------------------
function validateLength(input, min, max){
    const len = input.value.trim().length;
    return len >= min && len <= max;
}


// -----------------------------------------------------------
// 9. DROPDOWN (SELECT) VALIDATION
// -----------------------------------------------------------
// select.value should not be empty
function validateSelect(select){
    return select.value !== "";
}


// -----------------------------------------------------------
// 10. CHECKBOX VALIDATION
// -----------------------------------------------------------
function validateCheckbox(checkbox){
    return checkbox.checked;
}


// -----------------------------------------------------------
// 11. RADIO BUTTON VALIDATION
// -----------------------------------------------------------
function validateRadio(name){
    const radios = document.getElementsByName(name);
    for(let r of radios){
        if(r.checked) return true;
    }
    return false;
}


// -----------------------------------------------------------
// 12. REAL-TIME VALIDATION (keyup, input events)
// -----------------------------------------------------------
// Add listeners to provide instant feedback:
// username.addEventListener("input", () => console.log(username.value));


// -----------------------------------------------------------
// 13. SHOW SUCCESS STATES
// -----------------------------------------------------------
function markSuccess(input){
    input.classList.add("success");
    input.classList.remove("error");
}

function markError(input){
    input.classList.add("error");
    input.classList.remove("success");
}


// -----------------------------------------------------------
// 14. FULL FORM VALIDATION EXAMPLE
// -----------------------------------------------------------
// A typical form validation before submit

function validateFullForm(){
    let valid = true;

    if(!validateRequired(username)){
        showError(username, "Username is required");
        markError(username);
        valid = false;
    } else {
        clearError(username);
        markSuccess(username);
    }

    return valid;
}


// -----------------------------------------------------------
// 15. ADVANCED VALIDATION PATTERNS
// -----------------------------------------------------------
// → Using datasets in HTML: <input data-required="true">
// → Using validate() functions stored in an array
// → Using FormData API

function validateWithFormData(formElement){
    const data = new FormData(formElement);
    console.log("Collected Values:", Object.fromEntries(data.entries()));
}


// -----------------------------------------------------------
// 16. DEBOUNCED VALIDATION (Optimized)
// -----------------------------------------------------------
let debounceTimer;
function debounce(fn, delay){
    return function(){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => fn.apply(this, arguments), delay);
    }
}


// -----------------------------------------------------------
// 17. REGEX VALIDATION PATTERNS CHEATSHEET
// -----------------------------------------------------------
// Only letters: /^[A-Za-z]+$/
// Letters + spaces: /^[A-Za-z ]+$/
// Username: /^[A-Za-z0-9_]{4,16}$/
// Strong password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/


// -----------------------------------------------------------
// 18. FORM SUBMISSION USING AJAX (Fetch API)
// -----------------------------------------------------------
async function submitFormAJAX(url, formElement){
    const formData = new FormData(formElement);
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    return response.json();
}


// -----------------------------------------------------------
// 19. COMPLEX VALIDATION: CHAINED RULES
// -----------------------------------------------------------
function runValidationRules(input, rules){
    for(let rule of rules){
        if(!rule.check(input)){
            showError(input, rule.message);
            return false;
        }
    }
    clearError(input);
    return true;
}

// Example rule set:
const usernameRules = [
    {check: validateRequired, message: "Username required"},
    {check: (i)=>validateLength(i,3,16), message: "3-16 chars allowed"}
];


// -----------------------------------------------------------
// INTERVIEW QUESTIONS + ANSWERS
// -----------------------------------------------------------
/*
1. What is form validation?
Answer: Checking if user input meets required rules before submitting.

2. Difference between HTML5 validation & JS validation?
HTML5: built-in, limited, uses attributes
JS: custom, flexible, programmable

3. What is event.preventDefault() used for?
Stops page reload; lets you validate first.

4. How do you validate an email in JS?
Using regex: emailRegex.test(value)

5. How to validate passwords?
Check length, uppercase, lowercase, number, symbol.

6. What is FormData API?
An object that captures form fields as key-value pairs.

7. What is debouncing in validation?
A way to delay function execution to reduce excessive calls (e.g., during typing).

8. What is the difference between input, change, and blur events?
input: fires on each keystroke
change: fires after losing focus and value changed
blur: fires on focus loss

9. How do you validate a group of radio buttons?
Check if any radio with same name is checked.

10. What is the advantage of validating on both frontend & backend?
Frontend improves UX; backend ensures security.
*/
