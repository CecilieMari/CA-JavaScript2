import { register } from "../../api/auth/register";

export function registerFormHandler(){
  const form = document.querySelector("#registerForm");

    form.addEventListener("submit", handleRegisterForm)

    } 


async function handleRegisterForm(event) {
    event.preventDefault();
    console.log(event);

    const form = event.target;

    const formData = new FormData(form);
    const entries = formData.entries();
    const userDetails = Object.fromEntries(entries);

    try{
        await register(userDetails)
        
    }catch(error){
        console.log(error)
    }

}