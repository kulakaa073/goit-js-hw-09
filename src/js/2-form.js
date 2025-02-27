const formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");

if (localStorage.getItem(localStorageKey)) {
    const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
    form.querySelector("input").value = formData.email;
    form.querySelector("textarea").value = formData.message;
}

form.addEventListener('input', (event) => {
    if (event.target.nodeName === "INPUT") {
        formData.email = event.target.value;
    }
    if (event.target.nodeName === "TEXTAREA") {
        formData.message = event.target.value;
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "")
    {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
})