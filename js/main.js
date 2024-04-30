
function leer(){
  fetch("https://65ef77abead08fa78a507acc.mockapi.io/comandosCasa")
  .then(response => response.json())
  .then(data => {
    // Obtener el último registro
    const ultimoRegistro = data[data.length - 1];

    // Extraer el comando del último registro
    const comando = ultimoRegistro.comando;
    console.log(comando);

    // Ejecutar lógica basada en el comando
    switch (comando) {
      case 'enciende la luz de la recámara':
            const focoRecamaraA = document.getElementById("focoRecamaraA");
            focoRecamaraA.style.display = "none";
            const focoRecamaraE = document.getElementById("focoRecamaraE");
            focoRecamaraE.style.display = "block";
        break;

        case 'apaga la luz de la recámara':
          focoRecamaraE.style.display = "none";
          focoRecamaraA.style.display = "block";
        break;

        case 'enciende la luz de la sala':
            const focoSalaA = document.getElementById("focoSalaA");
            focoSalaA.style.display = "none";
            const focoSalaE = document.getElementById("focoSalaE");
            focoSalaE.style.display = "block";
        break;

        case 'apaga la luz de la sala':
          focoSalaE.style.display = "none";
          focoSalaA.style.display = "block";
        break;

        case 'enciende las luces del jardín':
          const focoJardinA1 = document.getElementById("focoJardinA1");
          focoJardinA1.style.display = "none";
          const focoJardinE1 = document.getElementById("focoJardinE1");
          focoJardinE1.style.display = "block";
          const focoJardinA2 = document.getElementById("focoJardinA2");
          focoJardinA2.style.display = "none";
          const focoJardinE2 = document.getElementById("focoJardinE2");
          focoJardinE2.style.display = "block";
          const focoJardinA3 = document.getElementById("focoJardinA3");
          focoJardinA3.style.display = "none";
          const focoJardinE3 = document.getElementById("focoJardinE3");
          focoJardinE3.style.display = "block";
          const focoJardinA4 = document.getElementById("focoJardinA4");
          focoJardinA4.style.display = "none";
          const focoJardinE4 = document.getElementById("focoJardinE4");
          focoJardinE4.style.display = "block";
          const focoJardinA5 = document.getElementById("focoJardinA5");
          focoJardinA5.style.display = "none";
          const focoJardinE5 = document.getElementById("focoJardinE5");
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
          const ventiladorA = document.getElementById("ventiladorA");
          ventiladorA.style.display = "none";
          const ventiladorE = document.getElementById("ventiladorE");
          ventiladorE.style.display = "block";
        break;
        case 'apaga el ventilador':
          ventiladorE.style.display = "none";
          ventiladorA.style.display = "block";
        break;
        case 'abre las cortinas':
          const cortinaC1 = document.getElementById("cortinaC1");
          cortinaC1.style.display = "none";
          const cortinaC2 = document.getElementById("cortinaC2");
          cortinaC2.style.display = "none";
          const cortinaC3 = document.getElementById("cortinaC3");
          cortinaC3.style.display = "none";
          const cortinaA1 = document.getElementById("cortinaA1");
          cortinaA1.style.display = "block";
          const cortinaA2 = document.getElementById("cortinaA2");
          cortinaA2.style.display = "block";
          const cortinaA3 = document.getElementById("cortinaA3");
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
            
        break;
        case 'desactiva la alarma':
            
        break;
        case 'enciende las cámaras':
          const camaraA1 = document.getElementById("camaraA1");
          camaraA1.style.display = "none";
          const camaraA2 = document.getElementById("camaraA2");
          camaraA2.style.display = "none";
          const camaraA3 = document.getElementById("camaraA3");
          camaraA3.style.display = "none";
          const camaraE1 = document.getElementById("camaraE1");
          camaraE1.style.display = "block";
          const camaraE2 = document.getElementById("camaraE2");
          camaraE2.style.display = "block";
          const camaraE3 = document.getElementById("camaraE3");
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

  // Llamar a fetchData() cada 2 segundos
  setInterval(leer, 2000);
