
function actualizarPagina() {
  fetch("https://65ef77abead08fa78a507acc.mockapi.io/comandosCasa")
  .then(response => response.json())
  .then(data => {
    // Obtener el último registro
    const ultimoRegistro = data[data.length - 1];

    // Extraer el comando del último registro
    const comando = ultimoRegistro.comando;
    console.log(comando);

    const focoRecamaraA = document.getElementById("focoRecamaraA");
    const focoRecamaraE = document.getElementById("focoRecamaraE");
            const focoSalaA = document.getElementById("focoSalaA");
            const focoSalaE = document.getElementById("focoSalaE");
      const focoJardinA1 = document.getElementById("focoJardinA1");
      const focoJardinE1 = document.getElementById("focoJardinE1");
      const focoJardinA2 = document.getElementById("focoJardinA2");
      const focoJardinE2 = document.getElementById("focoJardinE2");
      const focoJardinA3 = document.getElementById("focoJardinA3");
      const focoJardinE3 = document.getElementById("focoJardinE3");
      const focoJardinA4 = document.getElementById("focoJardinA4");
      const focoJardinE4 = document.getElementById("focoJardinE4");
      const focoJardinA5 = document.getElementById("focoJardinA5");
      const focoJardinE5 = document.getElementById("focoJardinE5");
        const ventiladorA = document.getElementById("ventiladorA");
        const ventiladorE = document.getElementById("ventiladorE");
            const cortinaC1 = document.getElementById("cortinaC1");
            const cortinaC2 = document.getElementById("cortinaC2");
            const cortinaC3 = document.getElementById("cortinaC3");
            const cortinaA1 = document.getElementById("cortinaA1");
            const cortinaA2 = document.getElementById("cortinaA2");
            const cortinaA3 = document.getElementById("cortinaA3");
   
             const camaraA1 = document.getElementById("camaraA1");
   
             const camaraA2 = document.getElementById("camaraA2");
   
             const camaraA3 = document.getElementById("camaraA3");
   
             const camaraE1 = document.getElementById("camaraE1");
   
             const camaraE2 = document.getElementById("camaraE2");
   
             const camaraE3 = document.getElementById("camaraE3");

    // Ejecutar lógica basada en el comando
    switch (comando) {
      case 'enciende la luz de la recámara':
           
            focoRecamaraA.style.display = "none";
           
            focoRecamaraE.style.display = "block";
        break;

        case 'apaga la luz de la recámara':
          focoRecamaraE.style.display = "none";
          focoRecamaraA.style.display = "block";
        break;

        case 'enciende la luz de la sala':
   
            focoSalaA.style.display = "none";
   
            focoSalaE.style.display = "block";
        break;

        case 'apaga la luz de la sala':
          focoSalaE.style.display = "none";
          focoSalaA.style.display = "block";
        break;

        case 'enciende las luces del jardín':
       
          focoJardinA1.style.display = "none";
       
          focoJardinE1.style.display = "block";
       
          focoJardinA2.style.display = "none";
       
          focoJardinE2.style.display = "block";
       
          focoJardinA3.style.display = "none";
       
          focoJardinE3.style.display = "block";
       
          focoJardinA4.style.display = "none";
       
          focoJardinE4.style.display = "block";
       
          focoJardinA5.style.display = "none";
       
          focoJardinE5.style.display = "block";
        break;

        case 'apaga las luces del jardín':
      
          focoJardinA1.style.display = "block";
          
          focoJardinE1.style.display = "none";
          
          focoJardinA2.style.display = "block";
          
          focoJardinE2.style.display = "none";
          
          focoJardinA3.style.display = "block";
          
          focoJardinE3.style.display = "none";
          
          focoJardinA4.style.display = "block";
          
          focoJardinE4.style.display = "none";
          
          focoJardinA5.style.display = "block";
          
          focoJardinE5.style.display = "none";
        break;
        case 'enciende el ventilador':
     
          ventiladorA.style.display = "none";
     
          ventiladorE.style.display = "block";
        break;
        case 'apaga el ventilador':
          ventiladorE.style.display = "none";
          ventiladorA.style.display = "block";
        break;
        case 'abre las cortinas':
 
          cortinaC1.style.display = "none";
 
          cortinaC2.style.display = "none";
 
          cortinaC3.style.display = "none";
 
          cortinaA1.style.display = "block";
 
          cortinaA2.style.display = "block";
 
          cortinaA3.style.display = "block";
        break;
        case 'cierra las cortinas':
          
          cortinaC1.style.display = "block";
          cortinaC2.style.display = "block";
          cortinaC3.style.display = "block";
          
          cortinaA1.style.display = "none";
          
          cortinaA2.style.display = "none";
          
          cortinaA3.style.display = "none";
        break;
        case 'activa la alarma':
          var audio = document.getElementById("audio");
          audio.play();
        break;
        case 'desactiva la alarma':
            var audio = document.getElementById("audio");
            audio.play();
        break;
        case 'enciende las cámaras':
          camaraA1.style.display = "none";
          camaraA2.style.display = "none";
          camaraA3.style.display = "none";
          camaraE1.style.display = "block";
          camaraE2.style.display = "block";
          camaraE3.style.display = "block";
        break;
        case 'apaga las cámaras':
          camaraE1.style.display = "none";
          camaraE2.style.display = "none";
          camaraE3.style.display = "none";
          camaraA1.style.display = "block";
          camaraA2.style.display = "block";
          camaraA3.style.display = "block";
        break;
        default:
          resultDiv.innerHTML = '<p>Comando no reconocido.</p>';
      }
    
  })
  .catch(error => console.error("Error al obtener datos del API:", error));

}
actualizarPagina();
// Llamar a la función para actualizar la página cada 2 segundos
setInterval(actualizarPagina, 2000);
