export default function linkBlog() {
  document.addEventListener("click", (e) => {
    let classA = "blog-notice-box-link";

    if (
      e.target.className === classA ||
      e.target.className === "section-best-blog-notice_grid__info-button"
    ) {
      let idGet = e.target.getAttribute("id-blog");
      localStorage.setItem("idBlog", `${idGet}`);
    }
  });
}
