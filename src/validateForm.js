const validateForm = (email, emailshow, password, passwordShow) => {
  email.addEventListener("blur", validateEmail);
  password.addEventListener("blur", validatePassword);
  // email.addEventListener("click", normalEmail);
  // password.addEventListener("click", normalPassword);
  function validateEmail() {
    let small = /\S+@\S+\.\S+/;
    let med =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let large =
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let strVa = email.value;
    if (strVa === "" || strVa === " ") {
      emailshow.textContent = "Debe rellenar el campo email";
      email.style.border = "1px solid var(--error)";
      email.style.color = "var(--error)";
    } else if (!small.test(strVa) || !med.test(strVa) || !large.test(strVa)) {
      emailshow.textContent = "El campo email es incorrecto";
      email.style.border = "1px solid var(--error)";
      email.style.color = "var(--error)";
    } else {
      emailshow.textContent = "";
      email.style.border = "1px solid var(--gray)";
      email.style.color = "var(--gray)";
    }
  }
  function validatePassword() {
    let strVa = password.value;
    if (strVa === " " || strVa === "") {
      passwordShow.textContent = "Debe rellenar el campo contraseña";
      password.style.border = "1px solid var(--error)";
      password.style.color = "var(--error)";
    } else if (strVa.length <= 8) {
      passwordShow.textContent =
        "La contraseña debe de contener al menos 8 caracteres";
      password.style.border = "1px solid var(--error)";
      password.style.color = "var(--error)";
    } else if (strVa.length >= 20) {
      passwordShow.textContent =
        "La contraseña no puede contener mas de 20 caracteres";
      password.style.border = "1px solid var(--error)";
      password.style.color = "var(--error)";
    } else {
      passwordShow.textContent = "";
      password.style.border = "1px solid var(--gray)";
      password.style.color = "var(--gray)";
    }
  }
  // function normalEmail() {
  //   email.style.border = "1px solid var(--gray)";
  // }
  // function normalPassword() {
  //   password.style.border = "1px solid var(--gray)";
  // }
};
export default validateForm;
