let face = document.querySelector("#face");

face.addEventListener("mouseenter", (event)=>{
    face.src = "assets/img/smile.svg";
})

face.addEventListener("mouseleave", (event)=>{
    face.src = "assets/img/surprised.svg";
})