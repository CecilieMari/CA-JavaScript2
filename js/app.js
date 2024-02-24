import { registerFormHandler } from "./handlers/auth/registerFormHandler.js";
import { loginFormHandler } from "../js/handlers/auth/loginFromHandler.js";
import { displayPostsHandler } from "../js/handlers/posts/displayPostsHandler.js";
import { buildMenu } from "./ui/common/buildMenu.js"; 


function router() {
    const pathname = window.location.pathname;
console.log(pathname);

buildMenu(pathname);

   
    switch(pathname){
        case "/":
        case "/index.html":
        registerFormHandler();     
        break;

        case "/auth/login/":
        case "/auth/login/login.html":
            loginFormHandler();
            break;    

        case "/posts":
        case "/posts/posts.html":
              displayPostsHandler();
        break; 
    }
    handlers/posts/displayPostsHandler.js
}

 
router(); 