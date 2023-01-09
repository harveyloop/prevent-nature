export default function loadBlogIndex(father) {
  async function getBlogIndex() {
    let $fragment = document.createDocumentFragment();
    const url = "/data/blog.json";
    try {
      const res = await fetch(url);
      const json = await res.json();
      if (!res.ok) {
        throw {
          statusRes: res.status,
          statusText: res.statusText,
        };
      }
      for (let i = 0; i < 3; i++) {
        const item = json[i];

        const divFather = document.createElement("div");
        divFather.setAttribute(
          "class",
          "nov-text-container_box__second_hov__content"
        );
        const divFatherDateImage = document.createElement("div");
        divFatherDateImage.setAttribute(
          "class",
          "nov-text-container_box__second_hov"
        );
        const divFatherImage = document.createElement("div");
        divFatherImage.setAttribute("class", "actionidjust04");
        const image = document.createElement("img");
        image.setAttribute("src", `${item["principal_image"]}`); // get
        const spanDate = document.createElement("span");
        spanDate.textContent = `${item.time}`; // get
        const titleBlog = document.createElement("h3");
        const descriptionBlog = document.createElement("p");

        titleBlog.textContent = `${item["name-blog"]}`;
        descriptionBlog.textContent = `${item["content-blog"].slice(
          0,
          200
        )}...`;

        divFather.appendChild(divFatherDateImage);
        divFatherDateImage.appendChild(divFatherImage);
        divFatherImage.appendChild(image);
        divFatherDateImage.appendChild(spanDate);

        divFather.appendChild(titleBlog);
        divFather.appendChild(descriptionBlog);

        $fragment.appendChild(divFather);
      }
      father.appendChild($fragment);
    } catch (err) {
      console.log(err);
      const $fragmentTemp = document.createDocumentFragment();
      let myElementErr = document.createElement("h4");
      let mySecondElementErr = document.createElement("h3");
      let myThirdElementErr = document.createElement("div");
      myThirdElementErr.className = "err-product-load";
      mySecondElementErr.textContent = ":(";
      myElementErr.textContent = "Lo sentimos sucedio un error";
      myThirdElementErr.appendChild(mySecondElementErr);
      myThirdElementErr.appendChild(myElementErr);
      $fragmentTemp.appendChild(myThirdElementErr);
      father.parentElement.parentElement.appendChild($fragmentTemp);
    }
  }
  getBlogIndex();
}
