       
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
  

  console.log(error);
  
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

    // coloca el cursor en el campo de respuesta despues del primer comprobar
    answer.focus(); 
    
       
    
  
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "¡Correcto!";
      //pruebaElement.textContent = "pruebita";
      aciertos++; // aqui incremento el contador de aciertos

      document.getElementById("aciertos").textContent = aciertos; 

      
      
      
    } else {
      resultElement.textContent = "Incorrecto. La respuesta correcta es:"  ;
      correctaElement.textContent =  correctAnswer;
      
      error++; //aqui incrementa el contador de errores
      document.getElementById("error").textContent = error; 

          

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
  