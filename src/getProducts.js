const getProducts = async (father) => {
  let fragmentTemp = document.createDocumentFragment();

  let url = "../data/data.json";
  try {
    let res = await fetch(url);
    let json = await res.json();
    json.forEach((item) => {
      let convertNumber = parseFloat(item.price).toFixed(2);
      let divTemp = document.createElement("div");
      divTemp.className = "products-info-container__second-box";
      divTemp.innerHTML = `
        <div class="bg-responsive-image-item">
          <div class="bg-responsive-image-item__action-user">
            <span class="action-item-love" productId="${item.id}">
              <svg
                class="item-love-svg"
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="item-love-path"
                  d="M23.4004 13.301C19.3008 17.9451 15.1728 22.043 14.4003 22.8011C13.6277 23.5591 13.1644 23.5964 12.4003 22.8011L2.90028 12.801C2.90028 12.801 -0.599723 8.30098 1.90028 4.30108C4.40028 0.301177 7.40016 1.30118 9.40028 1.80108C11.4004 2.30098 13.9003 4.30108 13.9003 4.30108C16.9163 0.524387 19.3006 0.445309 22.4003 1.80108C25.5 3.15685 27.5 8.65686 23.4004 13.301Z"
                  fill="white"
                  stroke="#84BD86"
                  stroke-width="2"
                />
              </svg>
            </span>
            <span class="action-item-info-modal" productIdInfo="${item.id}">
              <img src="../assets/info-item.svg" alt="información" class="action47adcbu45"  productIdInfo="${item.id}"/>
            </span>
          </div>
          <div class="hov-detail-bg-responsive-image-item">
            <a>VER DETALLE</a>
          </div>
          <img
            class="product-principal-image"
            src=${item.img}
            alt="producto"
          />
        </div>
        <div class="reponsive-info-item">
          <h4 class="name-product">${item.name}</h4>
          <p>S/ ${convertNumber}</p>
          <button class="responsive-info-item-button">
            <span class="responsive-info-item-button__text">
              CONSULTAR POR WHATSAPP
            </span>
            <hr />
            <span class="responsive-info-item-button__image">
              <img src="../assets/whatsapp.svg" alt="whapsapp" />
            </span>
          </button>
        </div>
      `;
      fragmentTemp.appendChild(divTemp);
      father.appendChild(fragmentTemp);
    });
    let fatherForMoreProducts = father.parentNode;
    let elementMoreProducts = document.createElement("div");
    let elementMoreProductsChild = document.createElement("a");
    elementMoreProductsChild.textContent = "Ver mas productos";
    elementMoreProducts.className =
      "products-info-container__third grid-center";
    elementMoreProducts.appendChild(elementMoreProductsChild);
    fatherForMoreProducts.appendChild(elementMoreProducts);
  } catch (err) {
    let myElementErr = document.createElement("h4");
    let mySecondElementErr = document.createElement("h3");
    let myThirdElementErr = document.createElement("div");
    myThirdElementErr.className = "err-product-load";
    mySecondElementErr.textContent = ":(";
    myElementErr.textContent = "Lo sentimos sucedio un error";
    myThirdElementErr.appendChild(mySecondElementErr);
    myThirdElementErr.appendChild(myElementErr);
    fragmentTemp.appendChild(myThirdElementErr);
    father.parentNode.appendChild(fragmentTemp);
  }
};
export default getProducts;