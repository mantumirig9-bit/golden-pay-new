setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("loginPage").classList.remove("hidden");
}, 2500);

function login() {

  const email = document.getElementById("email").value;

  if(email === ""){
    alert("Enter email");
    return;
  }

  const name = email.split("@")[0];

  localStorage.setItem("gp_user", name);

  openApp(name);
}

function openApp(name){

  document.getElementById("loginPage").classList.add("hidden");

  document.getElementById("app").classList.remove("hidden");

  document.getElementById("profileName").innerText = name;

  document.getElementById("dashboardName").innerText =
    name + " 👋";
}

function toggleMenu(){
  document.getElementById("sidebar")
    .classList.toggle("active");
}
