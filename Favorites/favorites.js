
let s2boxes = document.getElementById("s2boxes");

fetch("http://localhost:3000/favorites")
.then(res=>res.json())
.then(data=>{
data.forEach(item => {
 
      
      s2boxes.innerHTML+=
      ` <div class="box1">
      <div class="img"><img src="${item.image}"></div>
      <div class="text">
      <h3>${item.date}</h3>
      <h1>${item.name}</h1>
      <button onClick='deleteItem(${item.id})'>Delete</button>
       </div>
       
      </div>  `
  })
})


const deleteItem = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id)
    .then(res=>{
      console.log(res.data);
      
      window.location.reload();
    })
  }