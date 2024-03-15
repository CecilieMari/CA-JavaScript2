import * as storage from "../../helpers/storage/index.js";

export function logoutButtonHandler() {
  const button = document.querySelector("logout");
  if (button) {
    button.addEventListener("click", handleLogout);
  } else {
    console.log("logout not found.");
  }
}

function handleLogout() {
  const shouldLogout = confirm("Are you sure you want to logout?");

  if (shouldLogout) {
    storage.remove("accessToken");
    window.location.href = "/";
  }
}