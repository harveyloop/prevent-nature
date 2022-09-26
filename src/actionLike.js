const actionLike = () => {
  let dbLike = [];
  document.addEventListener("click", likeProduct);
  function likeProduct(e) {
    if (
      e.target.className === "action-item-love" ||
      e.target.className === "action-item-love like-active"
    ) {
      let varOne = e.target.firstElementChild;
      let varTwo = varOne.firstElementChild;

      getProdcutData(e.target);

      if (varOne.className.baseVal === "item-love-svg like-active-svg") {
        varOne.classList.toggle("like-active-svg");
        if (varTwo.className.baseVal === "item-love-path like-active-path") {
          varTwo.classList.toggle("like-active-path");
        }
      } else if (
        varTwo.className.baseVal === "item-love-path like-active-path"
      ) {
        varTwo.classList.toggle("like-active-path");
      } else {
        e.target.classList.toggle("like-active");
      }
    } else if (
      e.target.className.baseVal === "item-love-svg" ||
      e.target.className.baseVal === "item-love-svg like-active-svg"
    ) {
      let varOne = e.target.firstElementChild;
      let varTwo = e.target.parentNode;

      getProdcutData(varTwo);

      if (
        varOne.className.baseVal == "item-love-path" &&
        e.target.className.baseVal == "item-love-svg" &&
        varTwo.className == "action-item-love"
      ) {
        e.target.classList.toggle("like-active-svg");
      } else if (
        e.target.className.baseVal === "item-love-svg like-active-svg"
      ) {
        e.target.classList.toggle("like-active-svg");
      }

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
      let varOne = e.target.parentNode;
      let varTwo = varOne.parentNode;

      getProdcutData(varTwo);

      if (varOne.className.baseVal === "item-love-svg like-active-svg") {
        varOne.classList.toggle("like-active-svg");
        if (varTwo.className === "action-item-love like-active") {
          varTwo.classList.toggle("like-active");
        }
      } else if (varTwo.className === "action-item-love like-active") {
        varTwo.classList.toggle("like-active");
      } else {
        e.target.classList.toggle("like-active-path");
      }
    }
  }
  function getProdcutData(father) {
    let likeIdProduct = father.getAttribute("productId");
    let allInfo = {
      id: `${likeIdProduct}`,
    };
    if (dbLike.length === 0) {
      dbLike = [...dbLike, allInfo];
      console.log("antes", dbLike);
    } else {
      let valdate = false;
      dbLike.forEach((item) => {
        if (item.id == allInfo.id) {
          valdate = true;
        }
      });
      dbLike = [...dbLike, allInfo];
      console.log("antes", dbLike);
      if (valdate) {
        let varTemp = dbLike.filter((item) => item.id !== allInfo.id);
        dbLike = varTemp;
        valdate = false;
        console.log("despues", dbLike);
      }
    }

    localStorage.setItem("likeProduct", JSON.stringify(dbLike));
  }
};
export default actionLike;
