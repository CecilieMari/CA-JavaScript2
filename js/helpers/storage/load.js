/*export function load(key) {
    
    const item = localStorage.getItem(key);
    console.log(item)
    return item && item !== "undefined" ? JSON.parse(item) : " ";
} */


export function load(key) {

    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}