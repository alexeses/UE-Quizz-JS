let opcCorrecta = [3,3,3,1,1]
let opcElegida = []
let cantOK = 0

function respuesta(nPregunta, select) {
  opcElegida[nPregunta] = select.value;

  id = "p" + nPregunta

  labels = document.getElementById(id).childNodes;
  labels[3].style.setbackgroundColor("red");
  labels[5].style.setbackgroundColor("red");
  labels[7].style.setbackgroundColor("red");
  
  select.parentNode.style.backgroundColor("green");
}

function corregir() {
  cantOK = 0

  for (let i = 0; i < opcElegida.length; i++) {
    if (opcElegida[i] == opcCorrecta[i]) {
      cantOK++;
    }
  } 

  document.getElementById("resultado").innerHTML = cantOK;

}