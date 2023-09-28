//
const loginForm = document.getElementById("login-form");
const mainHelper = document.getElementById("main-helper");
// this is abhorrent and why i love react
// -z
const username = {
    field: document.getElementById("username"),
    helper: document.getElementById("username-helper")
};
const password = {
    field: document.getElementById("password"),
    helper: document.getElementById("password-helper")
};
loginForm.addEventListener("submit", (e)=>{
    mainHelper.innerText = "";
    mainHelper.className = "";
    let invalid = false;
    if (!username.field.value) {
        username.helper.innerText = "this field is required";
        username.helper.className = "form-helper-text danger";
        invalid = true;
    }
    if (!password.field.value) {
        password.helper.innerText = "this field is required";
        password.helper.className = "form-helper-text danger";
        invalid = true;
    }
    if (invalid) {
        e.preventDefault();
        mainHelper.innerText = "Please fix the above errors to proceed.";
        mainHelper.className = "form-helper-text danger master";
    }
});

//# sourceMappingURL=login.6329479f.js.map
