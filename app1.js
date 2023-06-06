function checkAnswer() {
    var userAnswer = answerElement.value.toLowerCase();
    var correctAnswers = currentVerb.meanings.map(function(meaning) {
      return meaning.toLowerCase();
    });
  
    // coloca el cursor en el campo de respuesta después del primer comprobar
    answer.focus();
  
    if (correctAnswers.includes(userAnswer.trim())) {
      resultElement.textContent = "¡Correcto!";
      aciertos++; // aquí incremento el contador de aciertos
      document.getElementById("aciertos").textContent = aciertos;
    } else {
      resultElement.textContent = "Incorrecto. La respuesta correcta es: " + correctAnswers.join(" o ");
      error++; // aquí incrementa el contador de errores
      document.getElementById("error").textContent = error;
    }
  
    // Reinicia el juego después de 2 segundos
    setTimeout(function() {
      answerElement.value = "";
      resultElement.textContent = "";
      correctaElement.textContent = " ";
      startGame();
    }, 3000);
  }
  