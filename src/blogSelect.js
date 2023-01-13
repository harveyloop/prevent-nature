export default function blogSelect(father, text, title, date, img) {
  let idBlog = JSON.parse(localStorage.getItem("idBlog"));
  if (idBlog === null) {
    idBlog = 1;
  }
  async function getData() {
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
      const selectJson = json[idBlog - 1];
      date.textContent = selectJson.time;
      title.textContent = selectJson["name-blog"];
      text.textContent = `${selectJson["content-blog"]}`;
      img.setAttribute("src", `${selectJson["principal_image"]}`);
      if (selectJson["list-blog"].length !== 0) {
        const listOfJson = document.createElement("ul");
        listOfJson.className = "list-of-json";
        for (let i = 0; i < selectJson["list-blog"].length; i++) {
          const item = selectJson["list-blog"][i];
          const listOfJsonLi = document.createElement("li");
          listOfJsonLi.textContent = item;
          listOfJson.appendChild(listOfJsonLi);
        }
        father.appendChild(listOfJson);
      }
      if (selectJson["content-second-blog"].length !== 0) {
        const secondContent = document.createElement("p");
        secondContent.textContent = selectJson["content-second-blog"];
        secondContent.className = "blog-general_description";
        father.appendChild(secondContent);
      }
    } catch (err) {}
  }
  getData();
}
