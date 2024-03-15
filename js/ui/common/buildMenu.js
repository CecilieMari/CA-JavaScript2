
import { isLoggedIn } from "../../helpers/auth/isLogin.js";



export function buildMenu(path) {

 const menu = document.querySelector("#menu");

 console.log("path:", path);

 if (isLoggedIn()) {
    menu.innerHTML = `
    <li class="nav-item active">
    <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"><button>Log Out</button></a>
    </li>
    <li class="nav-item">
       <a class="nav-link" href="auth/login/index.html">Login</a>
    </li>

         `; 



 } else {

    menu.innerHTML = `
    <li class="nav-item active">
       <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
       <a class="nav-link" href="auth/login/index.html">Login</a>
    </li>
    <li class="nav-item">
       <a class="nav-link" href="/index.html">Register</a>
    </li>

                  `;
                }
            }