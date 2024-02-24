/*import { registerUrl } from "../../constants/api.js";

export async function register(userDetails) {
    
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    
    
    const response = await fetch(registerUrl, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error("oh no it was an error");
}*/

import { registerUrl } from "../../constants/api.js";

export async function register(userDetails) {
    
    console.log(JSON.stringify(userDetails))

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userDetails),
    };
    //JSON.stringify(userDetails),
    
    const response = await fetch(registerUrl, options);
    const json = await response.json();

    console.log(response);

    if(response.ok){
        return json;
    }

    throw new Error(json.errors[0].message);
}
