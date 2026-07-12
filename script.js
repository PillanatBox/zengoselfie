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
document.addEventListener("DOMContentLoaded", function () {
  const packageButtons = document.querySelectorAll(
    ".package-select-button"
  );

  const selectedPackageInput = document.getElementById(
    "selected-package"
  );

  const selectedPackagePriceInput = document.getElementById(
    "selected-package-price"
  );

  const extraCheckboxes = document.querySelectorAll(
    "[data-extra-price]"
  );

  const totalText = document.getElementById("quote-total");
  const totalHidden = document.getElementById("total-hidden");
  const contactSection = document.getElementById("contact");

  function formatPrice(price) {
    return new Intl.NumberFormat("hu-HU").format(price) + " Ft";
  }

  function calculateTotal() {
    let total = Number(selectedPackagePriceInput.value) || 0;

    extraCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        total += Number(checkbox.dataset.extraPrice) || 0;
      }
    });

    const formattedTotal = formatPrice(total);

    totalText.textContent = formattedTotal;
    totalHidden.value = formattedTotal;
  }

  packageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const packageName = button.dataset.packageName;
      const packagePrice =
        Number(button.dataset.packagePrice) || 0;

      selectedPackageInput.value =
        packageName + " – " + formatPrice(packagePrice);

      selectedPackagePriceInput.value = packagePrice;

      packageButtons.forEach(function (otherButton) {
        otherButton.classList.remove(
          "selected-package-button"
        );
      });

      button.classList.add("selected-package-button");

      calculateTotal();

      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  extraCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", calculateTotal);
  });

  calculateTotal();
});
const packageButtons = document.querySelectorAll(".package-button");

packageButtons.forEach(button => {

    button.addEventListener("click", function () {

        const packageName = this.dataset.package;

        document.getElementById("selected-package").value = packageName;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});