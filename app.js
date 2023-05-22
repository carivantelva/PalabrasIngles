       
  // Elementos de la página
  var questionElement = document.getElementById("question");
  var answerElement = document.getElementById("answer");
  var resultElement = document.getElementById("result");
  
  // Verbo actual
  var currentVerb;
  
  // Función para iniciar el juego
  function startGame() {
    // Obtén un verbo aleatorio de la lista
    var randomIndex = Math.floor(Math.random() * verbs.length);
    currentVerb = verbs[randomIndex];
  
    // Actualiza la pregunta
    questionElement.textContent =  currentVerb.english ;
  }
  

  
  // Función para comprobar la respuesta
  function checkAnswer() {
    var userAnswer = answerElement.value.toLowerCase();
    var correctAnswer = currentVerb.spanish.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "¡Correcto!";
    } else {
      resultElement.textContent = "Incorrecto. La respuesta correcta es:   " + correctAnswer + " ";
    }
  
    // Reinicia el juego después de 2 segundos
    setTimeout(function() {
      answerElement.value = "";
      resultElement.textContent = "";
      startGame();
    }, 3000);
  }
  
  // Inicia el juego al cargar la página
  startGame();
  