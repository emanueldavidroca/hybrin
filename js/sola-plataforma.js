let hexagono = document.querySelectorAll("#section-sola-plataforma-desktop .hexagono");

hexagono.forEach(hex => {

    hex.addEventListener("mouseover",()=>{
        if(hex.classList.contains("administrar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "Administrar informacion <br> Administrar en tiempo real.";
        }
        if(hex.classList.contains("gestionar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "Gestionar base de datos <br> Control de variables.";
        }
        if(hex.classList.contains("integrar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "Integracion facil <br> Soporte tecnico.";
        }
        if(hex.classList.contains("diseñar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "Diseños personalizado <br> Configurable y maquetable.";
        }
        if(hex.classList.contains("operar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "24/7 tiempo operacional <br> Disponibilidad continua.";
        }
        if(hex.classList.contains("conectar")){
            document.querySelector("#section-sola-plataforma-desktop .texto").innerHTML = 
            "Conectar dispositivos <br> Conexion multiplataforma.";
        }
    });
});
