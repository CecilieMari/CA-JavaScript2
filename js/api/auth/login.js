/*import { logInURL, postsURL } from "../../constants/api.js";


export async function login(userDetails) {
   //kan være vi poster til feil url, se dokumentasjon under login 
    const options = {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    
    
    const response = await fetch(postsURL, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }
    window.location.href = "/posts/index.html"

    throw new Error(json.errors[0].message);
}*/

import { logInURL } from "../../constants/api.js";

export async function login(userDetails) {
    
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    
    
    const response = await fetch(logInURL, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error(json.errors[0].message);
}