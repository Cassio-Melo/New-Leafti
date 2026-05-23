document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const resetForm = document.getElementById("reset-form");
  const errorMessage = document.getElementById("error-message");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (errorMessage) {
        errorMessage.className = "text-success small text-center mt-2";
        errorMessage.textContent = "Autenticando com sucesso... Redirecionando!";
      }
      setTimeout(() => { window.location.href = "index.html"; }, 1000);
    });
  }

  if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Senha alterada com sucesso!");
      window.location.href = "login.html";
    });
  }
});