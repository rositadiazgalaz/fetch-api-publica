var contenido=document.querySelector('#contenido');
let boton=document.getElementById("boton");
boton.addEventListener('click',()=>{
    fetch('texto.txt')
    .then(data=>data.text())
    .then(data=>{
        console.log(data)
    })

})