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
          const focoJardinA = document.getElementById("focoJardinA");
          focoJardinA.style.display = "none";
          const focoJardinE = document.getElementById("focoJardinE");
          focoJardinE.style.display = "block";
        break;

        case 'apaga las luces del jardín':
          focoJardinE.style.display = "none";
          focoJardinA.style.display = "block";
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
          const cortinaC = document.getElementById("cortinaC");
          cortinaC.style.display = "none";
          const cortinaTA = document.getElementById("cortinaA");
          setTimeout(function() {
            cortinaTA.style.display = "block";
            cortinaTA.play();
        }, 10);
          cortinaTA.style.display = "none";
          const cortinaA = document.getElementById("cortinaA");
          cortinaA.style.display = "block";
        break;
        case 'cierra las cortinas':
          cortinaA.style.display = "none";
          const cortinaTC = document.getElementById("cortinaA");
          setTimeout(function() {
            cortinaTC.style.display = "block";
            cortinaTC.play();
        }, 10);
          cortinaTC.style.display = "none";
          cortinaC.style.display = "block";
        break;
        case 'activa la alarma':
            
        break;
        case 'desactiva la alarma':
            
        break;
        case 'enciende las cámaras':
          const camaraA = document.getElementById("camaraA");
          camaraA.style.display = "none";
          const camaraE = document.getElementById("camaraE");
          camaraE.style.display = "block";
        break;
        case 'apaga las cámaras':
          camaraE.style.display = "none";
          camaraA.style.display = "block";
        break;
        default:
          resultDiv.innerHTML = '<p>Comando no reconocido.</p>';
      }
  })
  .catch(error => console.error("Error al obtener datos del API:", error));

  // Llamar a fetchData() cada 2 segundos
  setInterval(fetchData, 2000);