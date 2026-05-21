document.documentElement.classList.add("js-enabled");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector("#site-menu");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#year");
const cookieNotice = document.querySelector("[data-cookie-notice]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const cookieStorageKey = "aerorural-cookie-notice";

const closeMenu = () => {
  if (!menuToggle || !navPanel) return;
  menuToggle.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navPanel.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formStatus.textContent =
      "Formulario pendiente de conexión. Contacta por WhatsApp o email para recibir respuesta.";
    formStatus.classList.add("is-visible");
  });
}

if (cookieNotice && cookieAccept) {
  let hasAcceptedNotice = false;

  try {
    hasAcceptedNotice = localStorage.getItem(cookieStorageKey) === "accepted";
  } catch (error) {
    hasAcceptedNotice = false;
  }

  if (!hasAcceptedNotice) {
    cookieNotice.hidden = false;
  }

  cookieAccept.addEventListener("click", () => {
    try {
      localStorage.setItem(cookieStorageKey, "accepted");
    } catch (error) {
      // If storage is blocked, closing the notice for this visit is enough.
    }

    cookieNotice.hidden = true;
  });
}
