const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  let clickCount = 0;
  const movieList = movieLists[index];
  const totalItems = movieList.querySelectorAll("img").length;

  arrow.addEventListener("click", () => {
    const visibleItems = Math.floor(window.innerWidth / 350);
    const maxClicks = totalItems - visibleItems;
    
    if (clickCount < maxClicks) {
      clickCount++;
    } else {
      clickCount = 0;
    }
    
    movieList.style.transform = `translateX(${-clickCount * 300}px)`;
  });
});

const ball = document.querySelector(".toggle-ball");
const elementsToToggle = [
  document.querySelector(".container"),
  document.querySelector(".movie-list-title"),
  document.querySelector(".navbar-container"),
  document.querySelector(".sidebar"),
  document.querySelector(".left-menu-icon"),
  document.querySelector(".toggle")
].filter(Boolean);

ball.addEventListener("click", () => {
  if (ball.classList.contains("active")) {
    ball.classList.remove("active");
    elementsToToggle.forEach(item => item.classList.remove("active"));
  } else {
    ball.classList.add("active");
    elementsToToggle.forEach(item => item.classList.add("active"));
  }
});










const bestMovies = [
  { title: "The Shawshank Redemption", img: "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg", desc: "A story of hope and friendship." },
  { title: "The Dark Knight", img: "img/dark-knight.jpg", desc: "Batman faces the Joker in Gotham." },
  { title: "Inception", img: "img/inception.jpg", desc: "A mind-bending heist through dreams." },
  { title: "Fight Club", img: "img/fight-club.jpg", desc: "An underground fight club emerges." },
  { title: "Forrest Gump", img: "img/forrest-gump.jpg", desc: "A man with a remarkable journey." },
  { title: "The Godfather", img: "img/godfather.jpg", desc: "A powerful mafia family's story." }
];

const newMovies = [
  { title: "Oppenheimer", img: "img/oppenheimer.jpg", desc: "The story of the atomic bomb creator." },
  { title: "Dune: Part Two", img: "img/dune2.jpg", desc: "The continuation of Paul's journey." },
  { title: "Spider-Man: Across the Spider-Verse", img: "img/spiderman.jpg", desc: "Miles Morales explores new worlds." },
  { title: "Avatar: The Way of Water", img: "img/avatar2.jpg", desc: "Return to Pandora’s underwater world." },
  { title: "John Wick 4", img: "img/johnwick4.jpg", desc: "John Wick faces his deadliest challenge." },
  { title: "The Batman", img: "img/batman.jpg", desc: "A darker take on Gotham’s hero." }
];

const scaryMovies = [
  { title: "The Conjuring", img: "img/conjuring.jpg", desc: "A haunted house investigation." },
  { title: "It", img: "img/it.jpg", desc: "A terrifying clown haunts a town." },
  { title: "A Quiet Place", img: "img/quiet-place.jpg", desc: "A world where silence is survival." },
  { title: "Hereditary", img: "img/hereditary.jpg", desc: "A disturbing family horror story." },
  { title: "The Exorcist", img: "img/exorcist.jpg", desc: "A young girl’s possession case." },
  { title: "Halloween", img: "img/halloween.jpg", desc: "A classic slasher horror film." }
];

const classicMovies = [
  { title: "Casablanca", img: "img/casablanca.jpg", desc: "A love story during wartime." },
  { title: "Gone with the Wind", img: "img/gone-wind.jpg", desc: "A romance set in the Civil War." },
  { title: "12 Angry Men", img: "img/12angrymen.jpg", desc: "A courtroom drama about justice." },
  { title: "Citizen Kane", img: "img/citizen-kane.jpg", desc: "The rise and fall of a tycoon." },
  { title: "Psycho", img: "img/psycho.jpg", desc: "A thriller with a shocking twist." },
  { title: "The Good, the Bad and the Ugly", img: "img/good-bad-ugly.jpg", desc: "An epic spaghetti western." }
];

const movieCategories = [bestMovies, newMovies, scaryMovies, classicMovies];

movieLists.forEach((list, index) => {
  list.innerHTML = movieCategories[index].map(movie => `
      <div class="movie-list-item">
          <img class="movie-list-item-img" src="${movie.img}" alt="${movie.title}">
          <span class="movie-list-item-title">${movie.title}</span>
          <p class="movie-list-item-desc">${movie.desc}</p>
          <button class="movie-list-item-button">Watch</button>
      </div>
  `).join("");
});
