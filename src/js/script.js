document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded Successfully");

  const productLinks = {
    "Моторные масла для легковых автомобилей": "http://finke-oil.ru/shop/dlya-legkovyx-avtomobilej/",
    "Моторные масла для коммерческого транспорта": "http://finke-oil.ru/shop/dlya-gruzovyx-avtomobilej/",
    "Тракторные масла": "http://finke-oil.ru/shop/dlya-traktorov/",
    "Масла для автоматических трансмиссий": "http://finke-oil.ru/shop/akpp-masla/",
    "Гидравлические масла": "http://finke-oil.ru/shop/gidravlicheskie-masla/",
    "Редукторные масла": "http://finke-oil.ru/shop/reduktornye-masla/",
    "Компрессорные масла": "http://finke-oil.ru/shop/kompressornye-masla/",
    "Масла для механических трансмиссий": "http://finke-oil.ru/shop/mkpp-masla/",
    "Охлаждающие жидкости": "http://finke-oil.ru/shop/ohlazhdayuschie-zhidkosti/",
    "Аэрозоли": "http://finke-oil.ru/shop/sprays/",
    "Lubriplate": "http://finke-oil.ru/shop/lubriplate/"
  };

  const buttons = document.querySelectorAll(".btn__catalog");
  const modal = document.querySelector(".modal__products");
  const modalClose = document.querySelector(".modal__close");
  const modalContent = document.querySelector(".modal__content");

  if (!modal || !modalClose || !modalContent) {
    console.error("Элементы модального окна не найдены!");
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".catalog__card__product");
      const productName = card.querySelector("h5").textContent;
      const productImage = card.querySelector("img").src;

      modalContent.innerHTML = "";

      for (let i = 1; i <= 3; i++) {
        const productCard = document.createElement("div");
        productCard.classList.add("modal__product-card");

        const img = document.createElement("img");
        img.src = productImage;
        img.alt = `${productName} ${i}`;

        const title = document.createElement("h5");
        title.textContent = `${productName} ${i}`;

        const button = document.createElement("a");
        button.classList.add("btn__go");
        button.textContent = "Перейти";

        const url = productLinks[productName] || "#";
        button.href = `${url}`;
        button.target = "_blank";

        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(button);
        modalContent.appendChild(productCard);
      }

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
