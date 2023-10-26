const submitBtn = document.querySelector(".submit");
const card_1_left = document.querySelector(".text-section");
const card_1_right = document.querySelector(".img-section");
const success = document.querySelector(".desktop-success");
const submittedEmail = document.querySelector(".submitted-email");
const dismissButton = document.querySelector(".dismiss");

function updateSuccessMessage(email) {
    submittedEmail.textContent = email;
}
function switchSections() {
    card_1_left.classList.add("hide");
    card_1_right.classList.add("hide");
    success.classList.remove("hide");
}

function isValidEntry(str) {
    const reg = new RexExp("[a-z0-9]+@[a-z]+.{2,3}");
    return reg.test(str)
}

// function showErrors() {
//     const errorMss = document.querySelector(".error-message");
//     const input = document.querySelector("#email");
//     errorMss.classList.add("active");
//     input.classList.add("error");
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = form.querySelector("#email");
//     const valid = isValidEntry(email.value);
//     if (!valid) {
//         return showErrors();
//     }
//     if (valid) {
//         updateSuccessMessage(email.value);
//         switchSections();
//     }
// })

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchSections();
})

dismissButton.addEventListener("click", (e) => {
    e.preventDefault();
    card_1_left.classList.remove("hide");
    card_1_right.classList.remove("hide");
    success.classList.add("hide");
})