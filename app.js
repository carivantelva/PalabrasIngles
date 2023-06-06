       
  // Elementos de la página
  var questionElement = document.getElementById("question");
  var answerElement = document.getElementById("answer");
  var resultElement = document.getElementById("result");

  

  //var pruebaElement = document.getElementById("prueba");
  var correctaElement = document.getElementById("correcta");
  // Verbo actual
  var currentVerb;

  var aciertos = 0;
  var error = 0;

  var usedVerbs = [];


  

  console.log(usedVerbs);
  
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
    var correctAnswers = currentVerb.meanings.map(function(meaning) {
      return meaning.toLowerCase();
    });

    // coloca el cursor en el campo de respuesta despues del primer comprobar
    answer.focus(); 
    
       
    
  
    if (correctAnswers.includes(userAnswer.trim())) {
      resultElement.textContent = "¡Correcto! : " + correctAnswers.join(" , ");
      aciertos++; // aquí incremento el contador de aciertos
      document.getElementById("aciertos").textContent = aciertos;
    } else {
      resultElement.textContent = "Incorrecto. La respuesta es: " + correctAnswers.join(" , ");
      error++; // aquí incrementa el contador de errores
      document.getElementById("error").textContent = error;
    }


  
    // Reinicia el juego después de 2 segundos
    setTimeout(function() {
      answerElement.value = "";
      resultElement.textContent = "";
      //pruebaElement.textContent = " ";
      correctaElement.textContent = " ";

      startGame();
    }, 4000);
  }
  
  // Inicia el juego al cargar la página
  startGame();



  function startGame() {
    var randomIndex;
  
    // Verifica si todas las palabras ya han sido utilizadas
    if (usedVerbs.length === verbs.length) {
      // Reinicia la lista de verbos utilizados
      usedVerbs = [];
    }
  
    // Obtén una palabra que no haya sido utilizada
    do {
      randomIndex = Math.floor(Math.random() * verbs.length);
    } while (usedVerbs.includes(randomIndex));
  
    // Almacena el índice del verbo actual
    currentVerbIndex = randomIndex;
    // Obtiene el verbo actual
    currentVerb = verbs[currentVerbIndex];
  
    // Actualiza la pregunta
    questionElement.textContent = currentVerb.english;
  
    // Agrega el índice del verbo a la lista de verbos utilizados
    usedVerbs.push(currentVerbIndex);
  }
  