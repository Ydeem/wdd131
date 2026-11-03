// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const isOpen = navMenu.classList.contains("open");
  menuButton.textContent = isOpen ? "✖" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});
