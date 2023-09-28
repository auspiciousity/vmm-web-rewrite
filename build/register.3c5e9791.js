const dob = document.getElementById("birth-date");
dob.addEventListener("keypress", (e)=>{
    let value = e.target.value.replace(/\D/g, "");
    // mm/dd/yyyy format
    if (value.length <= 2) value = value.replace(/^(\d{0,2})/, "$1");
    else if (value.length <= 4) value = value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    else value = value.replace(/^(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
    dob.value = value;
});
// simple validation
//
const signUpForm = document.getElementById("signup-form");
const mainHelper = document.getElementById("main-helper");
// this is abhorrent and why i love react
// -z
const firstName = {
    field: document.getElementById("first-name"),
    helper: document.getElementById("first-name-helper")
};
const lastName = {
    field: document.getElementById("last-name"),
    helper: document.getElementById("last-name-helper")
};
const username = {
    field: document.getElementById("username"),
    helper: document.getElementById("username-helper")
};
const gender = {
    field: document.getElementById("gender"),
    helper: document.getElementById("gender-helper")
};
const birthDate = {
    field: document.getElementById("birth-date"),
    helper: document.getElementById("birth-date-helper")
};
const email = {
    field: document.getElementById("email"),
    helper: document.getElementById("email-helper")
};
const password = {
    field: document.getElementById("password"),
    helper: document.getElementById("password-helper")
};
const passwordConfirm = {
    field: document.getElementById("password-confirm"),
    helper: document.getElementById("password-confirm-helper")
};
//
signUpForm.addEventListener("submit", (e)=>{
    mainHelper.innerText = "";
    mainHelper.className = "";
    // eslint-disable-next-line no-undef
    const invalid = registerValidate({
        "first-name": firstName,
        "last-name": lastName,
        username,
        gender,
        "birth-date": birthDate,
        email,
        password,
        "password-confirm": passwordConfirm
    });
    if (invalid) {
        e.preventDefault();
        mainHelper.innerText = "Please fix the above errors to proceed.";
        mainHelper.className = "form-helper-text danger master";
    }
});

//# sourceMappingURL=register.3c5e9791.js.map
