let face = document.querySelector("#face");

face.addEventListener("mouseenter", (event)=>{
    face.src = "./smile.svg";
})

face.addEventListener("mouseleave", (event)=>{
    face.src = "./surprised.svg";
})