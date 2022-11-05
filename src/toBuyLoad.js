function toBuyLoad(title, description, paypal, price, whatsapp, image) {
  let id = parseInt(localStorage.getItem("toBuyDirection"));
  if (id === null) {
    id = 1;
  }
  async function getDataBuy() {
    let url = "../data/data.json";
    try {
      let res = await fetch(url);
      let json = await res.json();
      console.log(id);
      let theProductSelect = json.filter((item) => item.id === id);
      console.log(json);
      console.log(theProductSelect);
      let titleJson = theProductSelect[0].name;
      let descriptionJson = theProductSelect[0].description;
      let priceJson = theProductSelect[0].price;
      let msgWhat = theProductSelect[0].messageWhats;
      let imgJson = theProductSelect[0].img;
      title.textContent = titleJson;
      description.textContent = descriptionJson;
      price.textContent = `S/${priceJson}`;
      whatsapp.setAttribute("href", `${msgWhat}`);
      image.setAttribute("src", `${imgJson}`);
    } catch (error) {}
  }
  getDataBuy();
}
export default toBuyLoad;
