const errormessage = document.getElementById("errorMessage");
const request = document.getElementById("request");

request.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const problem = document.getElementById("problem");
  const comment = document.getElementById("comment");

  console.log({
    name: name.value,
    phone: phone.value,
    problem: problem.value,
    comment: comment.value,
  });

  if (
    name.value == "" ||
    phone.value == "" ||
    problem.value == "" ||
    comment.value == ""
  ) {
    errormessage.style.transform = "translateY(-30vh)";
    errormessage.textContent = "Барлық өрістер тиянақты толу керек";
  }
  else {
    errormessage.style.transform = "translateY(-100vh)";
    errormessage.textContent = "";
  }
});


const arrowUp = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
    if (window.scrollY < 500) {
        arrowUp.style.display = "none";
    } else {
        arrowUp.style.display = "block"
    }
});

const header = document.getElementsByTagName('header')[0];
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        header.style.background = "white";
        header.style.width = "98%";
        header.style.margin = "0px";
        header.style.borderRadius = "0px"
        header.style.top = "0px";
    } else {
        header.style.background = "rgba(128, 128, 128, 0.4)";
        header.style.width = "95%";
        header.style.marginLeft = "20px";
        header.style.borderRadius = "50px"
        header.style.top = "10px";
    }
});