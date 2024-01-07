let id = new URLSearchParams(window.location.search).get("id");
let s2boxes = document.querySelector("#s2boxes")
fetch(`http://localhost:3000/services/${id}`)
.then(res=>res.json())
.then(data=>{

    
        s2boxes.innerHTML+=
        `<div class="box1">
        <div class="img"><img src="${data.image}"></div>
        <div class="text">
        <h3>${data.date}</h3>
        <h1>${data.name}</h1>
         </div>
         </div>  `
    })