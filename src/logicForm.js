const logicForm = (input) => {
  let validate = false;
  document.addEventListener("click", (e) => {
    if (e.target.className === "view-pass__button") {
      if (!validate) {
        input.removeAttribute("type");
        input.setAttribute("type", "text");
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "../assets/view-password.svg");
        validate = true;
      } else {
        input.removeAttribute("type");
        input.setAttribute("type", "password");
        e.target.removeAttribute("src");
        e.target.setAttribute("src", "../assets/no-view-password.svg");
        validate = false;
      }
    }
  });
};
export default logicForm;
