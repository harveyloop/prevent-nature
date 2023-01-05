const validateForm = (
  email,
  emailshow,
  password,
  passwordShow,
  registerName = false,
  registerNameShow
) => {
  let formSubmit = email.parentNode;

  formSubmit.addEventListener("submit", validateAll);
  email.addEventListener("blur", validateEmail);
  password.addEventListener("blur", validatePassword);
  let registerStatus = [false, false, false];
  if (registerName === null) {
    registerStatus[2] = true;
    return;
  } else {
    registerName.addEventListener("blur", validateName);
  }
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
      registerStatus[0] = false;
    } else if (!small.test(strVa) && !med.test(strVa) && !large.test(strVa)) {
      emailshow.textContent = "El campo email es incorrecto";
      email.style.border = "1px solid var(--error)";
      email.style.color = "var(--error)";
      registerStatus[0] = false;
    } else {
      emailshow.textContent = "";
      email.style.border = "1px solid var(--gray)";
      email.style.color = "var(--gray)";
      registerStatus[0] = true;
    }
  }
  function validatePassword() {
    let strVa = password.value;
    if (strVa === " " || strVa === "") {
      passwordShow.textContent = "Debe rellenar el campo contraseña";
      password.style.border = "1px solid var(--error)";
      password.style.color = "var(--error)";
      registerStatus[1] = false;
    } else if (strVa.length <= 8) {
      passwordShow.textContent =
        "La contraseña debe de contener al menos 8 caracteres";
      password.style.border = "1px solid var(--error)";
      password.style.color = "var(--error)";
      registerStatus[1] = false;
    } else if (strVa.length >= 20) {
      passwordShow.textContent =
        "La contraseña no puede contener mas de 20 caracteres";
      password.style.border = "1px solid var(--error)";
      registerStatus[1] = false;
      password.style.color = "var(--error)";
    } else {
      passwordShow.textContent = "";
      password.style.border = "1px solid var(--gray)";
      registerStatus[1] = true;
      password.style.color = "var(--gray)";
    }
  }
  function validateName() {
    let strVa = registerName.value;
    if (strVa === "" || strVa === " ") {
      registerNameShow.textContent = "Debe rellenar el campo nombre";
      registerName.style.border = "1px solid var(--error)";
      registerName.style.color = "var(--error)";
      registerStatus[2] = false;
    } else if (strVa.length > 25) {
      registerNameShow.textContent =
        "No puede ingresar mas de 25 caracteres en el campo nombre";
      registerName.style.border = "1px solid var(--error)";
      registerName.style.color = "var(--error)";
      registerStatus[2] = false;
    } else {
      registerNameShow.textContent = "";
      registerName.style.border = "1px solid var(--gray)";
      registerName.style.color = "var(--gray)";
      registerStatus[2] = true;
    }
  }
  function validateAll(e) {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (registerName === null) {
      registerStatus[2] = true;
    } else {
      validateName();
    }
    if (registerStatus[0] && registerStatus[1] && registerStatus[2]) {
      console.log("Form success!! redirect");
      console.log(registerStatus);
    } else {
      console.log(registerStatus);
      console.log("Error form");
    }
  }
};
export default validateForm;
