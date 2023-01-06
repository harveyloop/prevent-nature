export function scrollProduct(item) {
  item.addEventListener("click", scrollClick);
}
function scrollClick() {
  window.scroll({
    top: 1500,
    behavior: "smooth",
  });
}
