
const colore = document.querySelectorAll(".button");
// console.log(colore);
const body = document.querySelector("body");


colore.forEach(function(button){
    // console.log(colore);
    button.addEventListener("click", function(a){ // "a" stands for evant
        // console.log(a);
        // console.log(a.target);
    if(a.target.id === "grey"){
        body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "white"){
        body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "blue"){
        body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "yellow"){
        body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "red"){
        body.style.backgroundColor = a.target.id;
    }
    });

});
