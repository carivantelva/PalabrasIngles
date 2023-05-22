       
  // Elementos de la página
  var questionElement = document.getElementById("question");
  var answerElement = document.getElementById("answer");
  var resultElement = document.getElementById("result");

  

  //var pruebaElement = document.getElementById("prueba");
  var correctaElement = document.getElementById("correcta");
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
    console.log(userAnswer);

    let contador = 0;
    console.log(contador);

    
    
  
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "¡Correcto!";
      //pruebaElement.textContent = "pruebita";
      
    } else {
      resultElement.textContent = "Incorrecto. La respuesta correcta es:"  ;
      correctaElement.textContent =  correctAnswer;
      contador++;
      console.log(contador);

    }


  
    // Reinicia el juego después de 2 segundos
    setTimeout(function() {
      answerElement.value = "";
      resultElement.textContent = "";
      //pruebaElement.textContent = " ";
      correctaElement.textContent = " ";

      startGame();
    }, 3000);
  }
  
  // Inicia el juego al cargar la página
  startGame();
  