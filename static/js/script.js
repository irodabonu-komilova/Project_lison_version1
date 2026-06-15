function togglePassword(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Parollar bir xil emas!");
    return;
  }

  alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
});