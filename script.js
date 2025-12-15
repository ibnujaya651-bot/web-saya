function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("login").style.display = "none";
    document.getElementById("home").style.display = "block";
  } else {
    alert("Username atau password salah!");
  }
}

function logout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function previewImage() {
  const file = document.getElementById("upload").files[0];
  const preview = document.getElementById("preview");

  if (file) {
    preview.src = URL.createObjectURL(file);
  }
    }
