document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll('nav a[href]').forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
