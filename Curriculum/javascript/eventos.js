
document.getElementById("diseño_boton1").addEventListener("click", function() {
    let colorFondo = document.body.style.backgroundColor =  colorAleatorio();
    document.getElementById("navegador_nav").style.backgroundColor =  colorFondo;
    document.getElementById("navegador_li").style.backgroundColor =  colorFondo;
})

document.getElementById("diseño_boton2").addEventListener("click", function() {
    document.getElementById("header_h1").style.backgroundColor =  colorAleatorio();
    document.getElementById("header_div").style.backgroundColor =  colorAleatorio();
})

document.getElementById("diseño_boton3").addEventListener("click", function() {
    console.log("hola desde la consola");
    let colorExperiencia = document.getElementById("experiencia").style.backgroundColor = colorAleatorio();
    document.getElementById("estudios").style.backgroundColor =  colorExperiencia;
    document.getElementById("perfil_personal").style.backgroundColor = colorExperiencia;
    document.getElementById("habilidades").style.backgroundColor = colorExperiencia;
    document.getElementById("contacto").style.backgroundColor = colorExperiencia;
    document.getElementById("diseño_boton1").style.backgroundColor = colorExperiencia; 
    document.getElementById("diseño_boton2").style.backgroundColor = colorExperiencia; 
    document.getElementById("diseño_boton3").style.backgroundColor = colorExperiencia; 
    
})




function colorAleatorio(){
    let lista = [];

    for (let i = 0; i < 6; i++){
        lista.push(parseInt(Math.random()*16))
        switch (lista[i]){
            case 10:
                lista[i] = "a"
                break
            case 11:
                lista[i] = "b"
                break
            case 12:
                lista[i] = "c"
                break
            case 13:
                lista[i] = "d"
                break
            case 14:
                lista[i] = "e"
                break
            case 15:
                lista[i] = "f"
                break
        }
            
    }
    let color= "#" + lista[0] + lista[1]+ lista[2]+ lista[3]+lista[4] +lista[5]
    return color   
}

