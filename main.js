let opcCorrecta = [1,3,1,1,1]
let opcElegida = []
let cantOK = 0
let colorSelect = "#f1f1f1cd";
let colorNone = "#3bc17a";

function respuesta(nPregunta, select) {
  opcElegida[nPregunta] = select.value;

  id = "p" + nPregunta

  console.log(id)
  console.log(select.value)

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = colorSelect;
  labels[5].style.backgroundColor = colorSelect;
  labels[7].style.backgroundColor = colorSelect;
  
  select.parentNode.style.backgroundColor = colorNone;
}

function userIsNotEmpty() {
  let user = document.getElementById("user").value;
  if (user.length > 0) {
    return true;
  } else {
    return false;
  }
}

function corregir() {

  if (userIsNotEmpty() == true) {
    cantOK = 0

    for (let i = 0; i < opcElegida.length; i++) {
      if (opcElegida[i] == opcCorrecta[i]) {
        cantOK++;
      }
    }
    document.getElementById("resultado").innerHTML = "Respuestas correctas: " + cantOK;
  } else {
    document.getElementById("resultado").innerHTML = "No has ingresado tu nombre";
  }


}