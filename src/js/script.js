document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded Successfully");

  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeBtn = document.querySelector(".close-btn");

  if (burgerMenu && mobileNav && closeBtn) {
    burgerMenu.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      burgerMenu.classList.toggle("open");
    });

    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      burgerMenu.classList.remove("open");
    });
  } else {
    console.error("Элементы бургер-меню или навигации не найдены!");
  }

  const productLinks = {
    "Моторные масла для легковых автомобилей": "https://spets-avto.kz/",
    "Моторные масла для коммерческого транспорта": "https://spets-avto.kz/",
    "Тракторные масла": "https://spets-avto.kz/",
    "Масла для автоматических трансмиссий": "https://spets-avto.kz/",
    "Гидравлические масла": "https://spets-avto.kz/",
    "Редукторные масла": "https://spets-avto.kz/",
    "Компрессорные масла": "https://spets-avto.kz/",
    "Масла для механических трансмиссий": "https://spets-avto.kz/",
    "Охлаждающие жидкости": "https://spets-avto.kz/",
    Аэрозоли: "https://spets-avto.kz/",
    Lubriplate: "https://spets-avto.kz/",
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
