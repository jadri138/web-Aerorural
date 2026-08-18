/* Aerorural — comportamiento mínimo.
   Sin animaciones de scroll: el diseño no las usa. */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#menu");
const year = document.querySelector("#year");
const form = document.querySelector("#form-contacto");
const formStatus = document.querySelector("#form-estado");
const cookies = document.querySelector("[data-cookies]");
const cookiesOk = document.querySelector("[data-cookies-ok]");
const COOKIES_KEY = "aerorural-cookies";

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && nav) {
  const cerrar = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const abierto = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!abierto));
    nav.classList.toggle("is-open", !abierto);
    document.body.classList.toggle("menu-open", !abierto);
  });

  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrar();
  });
}

if (cookies && cookiesOk) {
  let aceptado = null;
  try {
    aceptado = window.localStorage.getItem(COOKIES_KEY);
  } catch (e) {
    aceptado = "1";
  }
  if (!aceptado) cookies.hidden = false;

  cookiesOk.addEventListener("click", () => {
    cookies.hidden = true;
    try {
      window.localStorage.setItem(COOKIES_KEY, "1");
    } catch (e) {
      /* almacenamiento no disponible */
    }
  });
}

if (form && formStatus) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent =
      "El formulario aún no está conectado. Escríbeme por WhatsApp o a info@aerorural.es.";
  });
}
