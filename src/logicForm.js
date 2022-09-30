const logicForm = (input) => {
  let validate = false;
  document.addEventListener("click", (e) => {
    if (e.target.className === "view-pass__button") {
      if (!validate) {
        input.removeAttribute("type");
        input.setAttribute("type", "text");
        validate = true;
      } else {
        input.removeAttribute("type");
        input.setAttribute("type", "password");
        validate = false;
      }
    }
  });
};
export default logicForm;
