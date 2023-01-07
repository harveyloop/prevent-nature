export function blogData() {
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
      json.forEach((item) => {
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
        $blogLink.setAttribute("href", "");
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
        $blogDescription.textContent = `${item["content-blog"]}`;
      });
    } catch (err) {
      console.log(err);
    }
  }
  getBlog();
}
