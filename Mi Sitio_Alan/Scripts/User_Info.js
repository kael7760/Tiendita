const principal=document.querySelector(".datos");
let datos=["Grupo 18","************","grupo18@gmail.com","La Paz-Bolivia","Masculino","19","Estudiante"];
    let div1=document.createElement("DIV");
    div1.classList.add(".principal");
    div1.innerHTML=`<h2 class="datos principal">Datos Principales</h2><p>Nombre de Usuario : ${datos[0]}</p><hr>
    <p>Contraseña : ${datos[1]}</p><hr>
    <p>Correo Electronico : ${datos[2]}</p><hr>
    <p>Residencia : ${datos[3]}</p><hr>`;
    principal.appendChild(div1);
    div2=document.createElement("DIV");
    div2.classList.add(".principal");
    div2.innerHTML=`<h2 class="datos secundario">Datos Opcionales</h2><p>Genero : ${datos[4]}</p><hr>
    <p>Edad : ${datos[5]}</p><hr>
    <p>Ocupacion : ${datos[2]}</p><hr>`;
    principal.appendChild(div2);