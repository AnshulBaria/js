const clock = document.getElementById("clock");
//let time = new Date();
//console.log(time.toLocaleTimeString());
setInterval(() => {
    let time = new Date();
    clock.textContent = time.toLocaleTimeString();
}, 1000);