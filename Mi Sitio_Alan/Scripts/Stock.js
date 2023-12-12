const contenedor = document.querySelector(".catalogo");
const logo=document.querySelector(".contenedor__logo");
logo.addEventListener("click",()=>window.location.href = "Index.html");
const libros = [
    ["Caminando en la Luna", "Maria Rodriguez"],
    ["Sombras del Pasado", "Alejandro Gómez"],
    ["El Jardín Secreto", "Ana Martínez"],
    ["Cielo Estrellado", "Roberto Fernández"],
    ["Aventuras en el Tiempo", "Laura Pérez"],
    ["Laberinto de Sueños", "Carlos Sánchez"],
    ["El Susurro del Viento", "Isabel López"],
    ["Bajo el Sol de Medianoche", "Marta Jiménez"],
    ["Entre las Ruinas del Olvido", "Javier Ruiz"],
    ["El Último Viaje del Navegante", "Patricia González"],
    ["Misterios en la Ciudad Perdida", "Antonio Ramírez"],
    ["Amanecer de los Sueños", "Laura Díaz"],
    ["El Llanto de las Estrellas", "Ricardo Gutiérrez"],
    ["Senderos de Esperanza", "Gabriela Flores"],
    ["Enigma en la Biblioteca", "Manuel Torres"],
    ["Travesía por el Bosque Encantado", "Susana Castillo"],
    ["La Isla de los Secretos", "José López"],
    ["El Misterio del Reloj de Arena", "Carolina Ruiz"],
    ["Canciones del Pasado", "Juan Martín"],
    ["Sombras en la Ciudad de Cristal", "Laura García"]
];
function crearLibro(nombre, autor) {
    const img = `<img src="Imagenes/Libro.jpg">`;
    const nombreHtml = `<h5  style="color:black">${nombre}</h5>`;
    const autorHtml = `<p>por ${autor}</p>`;
    const precioHtml = `<h3><sup>Bs</sup>${Math.floor(Math.random()*30+100)}</h3>`;
    return [img, nombreHtml, autorHtml, precioHtml];
}
for(i=0;i<20;i++){
    let libro1 = crearLibro(libros[i][0], libros[i][1]);
    let div = document.createElement("DIV");
    div.classList.add("item",`libro-${i}`);
    div.innerHTML = libro1.join(``);
    contenedor.appendChild(div);
}


