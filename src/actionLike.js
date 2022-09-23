const actionLike = () => {
  document.addEventListener("click", likeProduct);
  function likeProduct(e) {
    console.log(e.target.tagName);
    console.log(e.target.className.baseVal);
    if (
      e.target.className === "action-item-love" ||
      e.target.className === "action-item-love like-active"
    ) {
      let varOne = e.target.firstElementChild;
      let varTwo = varOne.firstElementChild;
      e.target.classList.toggle("like-active");
      if (varOne.className.baseVal === "item-love-svg like-active-svg") {
        varOne.classList.toggle("like-active-svg");
        if (varTwo.className.baseVal === "item-love-path like-active-path") {
          varTwo.classList.toggle("like-active-path");
        }
      } else if (
        varTwo.className.baseVal === "item-love-path like-active-path"
      ) {
        varTwo.classList.toggle("like-active-path");
      }
    } else if (
      e.target.className.baseVal === "item-love-svg" ||
      e.target.className.baseVal === "item-love-svg like-active-svg"
    ) {
      e.target.classList.toggle("like-active-svg");

      let varOne = e.target.firstElementChild;
      let varTwo = e.target.parentNode;
      if (varOne.className.baseVal === "item-love-path like-active-path") {
        varOne.classList.toggle("like-active-path");
      }
      if (varTwo.className === "action-item-love like-active") {
        varTwo.classList.toggle("like-active");
      }
    } else if (
      e.target.className.baseVal === "item-love-path" ||
      e.target.className.baseVal === "item-love-path like-active-path"
    ) {
      e.target.classList.toggle("like-active-path");

      let varOne = e.target.parentNode;
      let varTwo = varOne.parentNode;
      if (varOne.className.baseVal === "item-love-svg like-active-svg") {
        varOne.toggle("like-active-svg");
        if (varTwo.className === "action-item-love like-active") {
          varTwo.classList.toggle("like-active");
        }
      } else if (varTwo.className === "action-item-love like-active") {
        varTwo.classList.toggle("like-active");
      }
    }
  }
};
export default actionLike;
