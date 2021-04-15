const mapButton = document.querySelector(".button-map");
const contactModal = document.querySelector(".modal-contact-us");
const contactModalCloseButton = contactModal.querySelector(".modal-close");
const contactForm = contactModal.querySelector(".contact-form");
const nameField = contactForm.querySelector("[name=name]");
const emailField = contactForm.querySelector("[name=email]");
const messageField = contactForm.querySelector("[name=message]");

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactModal.classList.add("modal-open");
});

contactModalCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactModal.classList.remove("modal-open");
    contactModal.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !messageField.value) {
        evt.preventDefault();
        contactModal.classList.remove("modal-error");
        contactModal.offsetWidth = contactModal.offsetWidth;
        contactModal.classList.add("modal-error");
    }
});