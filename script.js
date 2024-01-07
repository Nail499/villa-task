let menu = document.getElementById("menu");


function myFunction() {
    document.getElementById("dropmenu").classList.toggle("show");
  }





let s2boxes = document.getElementById("s2boxes");
let page = 3;
 function getDataJson(){ 
  fetch("http://localhost:3000/services")
.then(response=>response.json())
.then(data=>{
  data.slice(page - 3,page).forEach(item => {
   
        
        s2boxes.innerHTML+=
        ` <div class="box1">
        <div class="img"><img src="${item.image}"></div>
        <div class="text">
        <h3>${item.date}</h3>
        <h1>${item.name}</h1>
         </div>
         <div class="buttons">
        <button><a href="./Details/details.html?id=${item.id}">Details</a></button>
        <button><a href="../Update/update.html?id=${item.id}">Update</a></button>
        <button onClick='deleteItem(${item.id})'>Delete</button>
        
        <div class="heart"><i class="bi-heart" onclick = "addFavorite(${item.id})"></i></div></div>
    </div>  `

  
    })  
})
 }
 getDataJson()


const deleteItem = (id) => {
  axios.delete('http://localhost:3000/services/'+id)
  .then(res=>{
    console.log(res.data);
    
    window.location.reload();
  })
}

function addFavorite(id) {
  axios.get('http://localhost:3000/services/'+id)
  .then(res=>{
      
      axios.post('http://localhost:3000/favorites',res.data)
     
  })
  
}

let loadmore = document.querySelector("#getall");
loadmore.addEventListener('click', () => {
    
    page += 3;
    getDataJson();
})