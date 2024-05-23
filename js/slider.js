const stack = document.querySelector(".stack");
const certificates = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("certificate"));

certificates.forEach((certificate) => stack.appendChild(certificate));

function movecertificate() {
  const lastcertificate = stack.lastElementChild;
  if (lastcertificate.classList.contains("certificate")) {
    lastcertificate.classList.add("swap");

    setTimeout(() => {
      lastcertificate.classList.remove("swap");
      stack.insertBefore(lastcertificate, stack.firstElementChild);
    }, 1200);
  }
}

stack.addEventListener("click", function (e) {
  const certificate = e.target.closest(".certificate");
  if (certificate && certificate === stack.lastElementChild) {
    certificate.classList.add("swap");

    setTimeout(() => {
      certificate.classList.remove("swap");
      stack.insertBefore(certificate, stack.firstElementChild);
      resetAutoplay();
    }, 1200);
  }
});

let autoplayInterval = setInterval(movecertificate, 4000);

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(movecertificate, 4000);
}
