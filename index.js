const cards = document.querySelector("#template-card").content;
const items = document.querySelector("#items");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
    .then((res)=>res.json())
    .then((data=>{
        crearProductos(data);
    })
        
        )
});

const crearProductos = (data)=>{
    data.forEach((item)=>{
        cards.querySelector("h5").textContent = item.title;
        cards.querySelector("p").textContent = item.price;
        cards.querySelector("img").setAttribute("src", item.img);
        cards.querySelector(".btn-success").dataset.id = item.id;
        const clone = cards.cloneNode(true);
    
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}
    
