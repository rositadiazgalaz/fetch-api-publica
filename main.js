var contenido=document.querySelector('#contenido');
let boton=document.getElementById("boton");
boton.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>{
        console.log(data.results['0'].email);
        contenido.innerHTML=
        `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last}</p>
        `
    })

})