/* const mainWhich = document.getElementById("largeWhich");
const key = document.getElementById("key");
const code = document.getElementById("code");
const which = document.getElementById("which");

document.addEventListener("keydown", (e) => {    
    //mainWhich.textContent = e.which;
    //mainWhich.textContent = "hello";
    key.textContent = e.key;
    code.textContent = e.keyCode; //"arse1";
    which.textContent = e.which; //"arse2";
    //code.textContent = ${event.code};
    //which.textContent = ${event.which};
});*/


document.addEventListener("keydown", (event) => {  
    const number = document.getElementById("number");
    const key = document.getElementById("key");
    const code = document.getElementById("code");
    const which = document.getElementById("which");
    const location = document.getElementById("location");

    number.textContent = `${event.which}`;
    key.textContent = `${event.key}`;
    code.textContent = `${event.code}`;
    which.textContent = `${event.which}`;
    location.textContent = `${event.location}`;
});