const foods = [
  {
    name: "Пицца ірімшікпен",
    description: "Дәмі керемет, пепперони мен құймақпен толтырылған.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 2500,
  },
  {
    name: "Дабл бургер",
    description: "Қуырылған ет, тұздық және жасыл салаттан тұрады.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 1500,
  },
  {
    name: "Суши Филодельфия",
    description: "Жапондық дәмді суши, лосось және авокадо.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 3000,
  },
  {
    name: "Тофу салаты",
    description: "Вегандық салат, тофу және түрлі көкөністер.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: 2000,
  },
];

let cart = [];

function renderFoods() {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";

  foods.forEach((food) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
            <p><strong>Бағасы: ${food.price} тг</strong></p>
        `;

    productGrid.appendChild(productCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFoods();
  document.getElementById("cart").style.display = "none";
});
