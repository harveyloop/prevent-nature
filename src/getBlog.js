export default function blogData(
  father,
  timePrincipal,
  titlePrincipal,
  imagePrincial,
  descriptionPrincipal,
  linkPrincipal
) {
  const $fragment = document.createDocumentFragment();
  async function getBlog() {
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
      imagePrincial.style.objectFit = "cover";
      json.forEach((item) => {
        const cutText = item["content-blog"].slice(0, 200);

        const $blogNoticeDiv = document.createElement("div");
        const $blogNoticeImage = document.createElement("div");
        const $blogImage = document.createElement("img");
        const $blogTime = document.createElement("span");
        const $blogView = document.createElement("span");
        const $blogTitle = document.createElement("h2");
        const $blogDescription = document.createElement("p");
        const $blogLink = document.createElement("a");

        $blogNoticeDiv.setAttribute("class", "blog-notice-box");
        $blogNoticeImage.setAttribute("class", "blog-notice-box__responsive");
        $blogImage.setAttribute("src", `${item.principal_image}`);
        $blogImage.setAttribute("alt", "blog image");
        $blogTime.setAttribute("class", "blog-notice-box-time");
        $blogTitle.setAttribute("class", "blog-notice-box-title");
        $blogDescription.setAttribute("class", "blog-notice-box-description");
        $blogLink.setAttribute("href", "/public/blogSelect.html");
        $blogLink.setAttribute("id-blog", `${item.id}`);
        $blogLink.setAttribute("class", "blog-notice-box-link");

        $blogNoticeDiv.appendChild($blogNoticeImage);
        $blogNoticeDiv.appendChild($blogTime);
        $blogNoticeDiv.appendChild($blogTitle);
        $blogNoticeDiv.appendChild($blogDescription);
        $blogNoticeDiv.appendChild($blogLink);

        $blogNoticeImage.appendChild($blogImage);

        $blogTime.appendChild($blogView);

        $blogView.textContent = "0 views";
        $blogTime.textContent = `${item.time}`;
        $blogTitle.textContent = `${item["name-blog"]}`;
        $blogDescription.textContent = `${cutText}...`;
        $blogLink.text = "Leer mas";

        $fragment.appendChild($blogNoticeDiv);
      });
      father.appendChild($fragment);

      const random = parseInt(Math.random() * json.length);
      const selectBlog = json[random];
      timePrincipal.textContent = selectBlog.time;
      titlePrincipal.textContent = selectBlog["name-blog"];
      descriptionPrincipal.textContent = `${selectBlog["content-blog"].slice(
        0,
        300
      )}...`;
      imagePrincial.setAttribute("src", `${selectBlog["principal_image"]}`);
      linkPrincipal.setAttribute("id-blog", `${selectBlog.id}`);
    } catch (err) {
      console.log(err);
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

      timePrincipal.textContent = "404 ERROR";
      titlePrincipal.textContent = "404 ERROR";
      descriptionPrincipal.textContent = `404 ERROR`;
      imagePrincial.setAttribute("src", `/assets/logo.svg`);
      imagePrincial.style.objectFit = "contain";
    }
  }
  getBlog();
}
