const countProduct = (more, less, count) => {
  let tempVar = 0;
  more.addEventListener("click", aumentCount);
  less.addEventListener("click", decrementCount);
  function decrementCount() {
    if (tempVar === 0) {
      return;
    } else {
      tempVar -= 1;
      count.textContent = tempVar;
    }
  }
  function aumentCount() {
    tempVar += 1;
    count.textContent = tempVar;
  }
};
export default countProduct;
