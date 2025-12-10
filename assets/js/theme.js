// Cambiar entre modo claro y oscuro
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar preferencia
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Modo Oscuro";
    }
});

// Cargar preferencia al abrir la página
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Modo Claro";
    } else {
        toggleBtn.textContent = "🌙 Modo Oscuro";
    }
};
