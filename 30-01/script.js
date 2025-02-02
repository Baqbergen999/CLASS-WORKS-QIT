// apiKey = `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films`;
const initialFilms = [
  {
    filmName: "Форрест Гамп",
    Genre: "Драма",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/600x900",
    id: "1",
  },
  {
    filmName: "Зеленая книга",
    Genre: "биография",
    image:
      "https://static.okko.tv/images/v4/c3104911-5b3f-48ef-bffa-9bba98feb424",
    id: "2",
  },
  {
    filmName: "Гладиатор",
    Genre: "история",
    image: "https://upload.wikimedia.org/wikipedia/ru/f/fe/Gladiatorteaser.jpg",
    id: "3",
  },
  {
    filmName: "Брат или брак",
    Genre: "комедия",
    image:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/514b141f-8330-452b-b1df-ef1cb0d6e8f0/600x900",
    id: "4",
  },
  {
    filmName: "Жаралы сезім",
    Genre: "мелодрама",
    image: "https://massaget.kz/userdata/news/news_72636/image_b.jpg",
    id: "5",
  },
];

let userFilms = [];

const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const films = document.getElementById("films");
const addedFilms = document.getElementById("addedFilms");
const addForm = document.getElementById('addForm');

const savedFilms = JSON.parse(localStorage.getItem('films'));
if (savedFilms) {
  userFilms = savedFilms;
}

const showFilms = () => {
  films.innerHTML = "";
  initialFilms.forEach((film) => {
    films.innerHTML += `
    <div class="film">
      <img src="${film.image}" alt="image"/>
      <h2>${film.filmName}</h2>
      <p>${film.Genre}</p>
    </div>`;
  });
};

showFilms();

const showUserFilms = () => {
  addedFilms.innerHTML = "";
  userFilms.forEach((film, index) => {
    const filmDiv = document.createElement("div");
    filmDiv.classList.add("film");
    filmDiv.innerHTML = `
      <img src="${film.image}" alt="image" />
      <h2>${film.filmName}</h2>
      <p>${film.Genre}</p>
      <button class="remove">Өшіру</button>
    `;
    const removeBtn = filmDiv.querySelector(".remove");
    removeBtn.addEventListener("click", () => {
      userFilms.splice(index, 1);
      localStorage.setItem('films', JSON.stringify(userFilms));
      showUserFilms();
    });
    addedFilms.appendChild(filmDiv);
  });
};

showUserFilms();

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addForm.innerHTML = `
    <div class="addFilm">
      <input type="text" placeholder="Image src" class="imageInput"/>
      <input type="text" placeholder="Film Name" class="nameInput"/>
      <input type="text" placeholder="Genre" class="genreInput"/>
      <button class="save">Save</button>
      <button class="cancel">Cancel</button>
    </div>`;
  addForm.style.display = 'block';

  const saveBtn = addForm.querySelector(".save");
  const cancelBtn = addForm.querySelector(".cancel");

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const imageInput = addForm.querySelector(".imageInput").value;
    const nameInput = addForm.querySelector(".nameInput").value;
    const genreInput = addForm.querySelector(".genreInput").value;

    if (imageInput && nameInput && genreInput) {
      const newFilm = {
        filmName: nameInput,
        Genre: genreInput,
        image: imageInput,
      };
      userFilms.push(newFilm);
      localStorage.setItem('films', JSON.stringify(userFilms));
      showUserFilms();
      addForm.style.display = 'none';
      addForm.innerHTML = '';
    }
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addForm.style.display = 'none';
    addForm.innerHTML = '';
  });
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem('films');
  userFilms = [];
  showUserFilms();
});

// async function getFilms() {
//   try {
//     const response = await fetch(apiKey);
//     const data = await response.json();
//     films.innerHTML = '';
//     data.forEach((film) => {
//       films.innerHTML += `
//       <div class="film">
//         <img src="${film.image}" alt="image" />
//         <h2>${film.filmName}</h2>
//         <p>${film.Genre}</p>
//         <button class="remove">Өшіру</button>
//       </div>`;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// getFilms()