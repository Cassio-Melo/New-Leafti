document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cadastro efetuado com sucesso! Redirecionando para a Home.");
      window.location.href = "index.html";
    });
  }
});