(function initTheme() {
  const body = document.body;
  const saved = localStorage.getItem("whatapp-theme");
  if (saved === "dark") body.classList.replace("theme-light", "theme-dark");
  if (saved === "perpar") body.classList.replace("theme-light", "theme-perpar");  

  function toggleTheme() {
    const isDark = body.classList.toggle("theme-dark");
    if (isDark) {
      body.classList.remove("theme-light");
      localStorage.setItem("whatapp-theme", "dark");
    } else {
      body.classList.add("theme-light");
      localStorage.setItem("whatapp-theme", "light");
    }
  }


  window.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.addEventListener("click", toggleTheme);

    const switchEl = document.getElementById("themeSwitch");
    if (switchEl) {
      switchEl.checked = body.classList.contains("theme-dark");
      switchEl.addEventListener("change", toggleTheme);
    }
  });
})();
