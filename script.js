const lightboxGallery = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true
});

const sendButton = document.getElementById("send-review");

if (sendButton) {
  sendButton.addEventListener("click", function () {
    const nev = document.getElementById("review-name").value;
    const csillag = document.getElementById("review-stars").value;
    const velemeny = document.getElementById("review-text").value;

    if (nev === "" || velemeny === "") {
      alert("Kérlek tölts ki minden mezőt!");
      return;
    }

    const review = document.createElement("div");
    review.classList.add("review-item");

    review.innerHTML = `
      <div class="stars">${csillag}</div>
      <p>${velemeny}</p>
      <strong>- ${nev}</strong>
    `;

    document.getElementById("review-list").prepend(review);

    document.getElementById("review-name").value = "";
    document.getElementById("review-text").value = "";
    document.getElementById("review-stars").selectedIndex = 0;
  });
}
window.addEventListener("load", function () {
  const welcomeScreen = document.getElementById("welcomeScreen");

  if (welcomeScreen) {
    setTimeout(function () {
      welcomeScreen.classList.add("hide");
    }, 2500);
  }
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    const icon = question.querySelector("span");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true
});