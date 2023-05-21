// Lista de palabras en inglés y sus significados en español
var verbs = [
  //verbos grupo 1
    { english: "Attack", spanish: "Atacar" },
    { english: "Bite", spanish: "Morder" },
    { english: "Benefit", spanish: "Beneficiar" },
    { english: "Borrow from", spanish: "Pedir prestado a" },
    { english: "Lend", spanish: "Dar prestado" },
    { english: "Behave", spanish: "Comportarse" },
    { english: "MisBehave", spanish: "Comportarse mal" },
    { english: "Beat", spanish: "Golpear" },
    { english: "Come to", spanish: "Venir a" },
    { english: "Go to", spanish: "ir a" },
    { english: "Go on", spanish: "Seguir" },
    { english: "Go away", spanish: "Alejarse" },
    { english: "Enroll", spanish: "Matricular enrolar" },
    { english: "Eat", spanish: "Comer" },
    { english: "Kiss", spanish: "Besar" },
    { english: "Leave", spanish: "Salir abandonar" },
    { english: "Obey", spanish: "Obedecer" },
    { english: "Flunk", spanish: "Perder un examen" },
    { english: "pass by", spanish: "Pasar por" },
    { english: "Pass away", spanish: "Fallecer morir" },
    { english: "Shout at", spanish: "Gritar a" },
    //preposiciones
    { english: "AT", spanish: "En" },
    { english: "IN", spanish: "En dentro" },
    { english: "OUT", spanish: "Fuera" },
    { english: "FROM", spanish: "De" },
    { english: "TO", spanish: "A" },
    { english: "INSTEAD OF", spanish: "En lugar de" },
    { english: "BECAUSE OF", spanish: "A causa de" },
    { english: "FOR", spanish: "Para" },
    { english: "WHIT", spanish: "con" },
    { english: "WITHOUT", spanish: "sin" },
    { english: "BY", spanish: "Por indica de quien" },

    //verbos grupo 2
    { english: "buy", spanish: "Comprar" },
    { english: "Sell", spanish: "Vender" },
    { english: "Catch", spanish: "Coger Capturar" },
    { english: "Captch up", spanish: "Ponerse al dia" },
    { english: "Defrost", spanish: "Descongelar" },
    { english: "Freeze", spanish: "Congelar" },
    { english: "Give Away", spanish: "Dar regalar" },
    { english: "Give up", spanish: "Rendirse" },
    { english: "Lose", spanish: "Perder" },
    { english: "Look at", spanish: "Mirar a" },
    { english: "Look back", spanish: "Voltear a mirar" },
    { english: "Look for", spanish: "Buscar" },
    { english: "Look like", spanish: "Parecarse a" },
    { english: "Put", spanish: "Poner colocar" },
    { english: "Report", spanish: "Reportar" },
    { english: "Ride", spanish: "Montar" },
    { english: "Run for", spanish: "presentarse para" },
    { english: "Run", spanish: "Correr" },
    { english: "Sing", spanish: "Cantar" },
    { english: "Study", spanish: "Estudiar" },
    { english: "Walk", spanish: "Caminar" },
    { english: "Walk away", spanish: "Alejarse" },
    { english: "Work", spanish: "Trabajar " },
  //Verb grupo 3
    { english: "Brush", spanish: "Cepillar Cepillo" },
    { english: "Celebrate", spanish: "Celebrar" },
    { english: "Decide", spanish: "Decidir" },
    { english: "Destroy", spanish: "Destrozar" },
    { english: "Dress", spanish: "Vestir Vestido de mujer" },
    { english: "Give in advance", spanish: "Dar por adelantado" },
    { english: "Mop", spanish: "Trapear Trapeador" },
    { english: "Sweep", spanish: "Barrer" },
    { english: "Recommend", spanish: "Recomendar" },
    { english: "Receive", spanish: "Recibir" },
    { english: "Travel", spanish: "Viajar" },
    { english: "Keep", spanish: "Guardar" },
    { english: "Answer to", spanish: "contestar a" },
    { english: "Demand", spanish: "Demandar" },
    { english: "Stand up", spanish: "Ponerse de pie" },
    { english: "Sit down", spanish: "Sentarse" },
    //Adverbios de tiempo asociados al imperativo y al presente
    { english: "Early", spanish: "Temprano" },
    { english: "Early", spanish: "Mas temprano" },
    { english: "Tonight", spanish: "Esta noche" },
    { english: "Now", spanish: "Ahora" },
    { english: "Today", spanish: "Hoy" },
    { english: "Tomorrow", spanish: "Mañana" },
    { english: "Right now", spanish: "Ya mismo Enseguida" },
    { english: "Right Away", spanish: "Ya mismo Enseguida" },
    { english: "At once", spanish: "Ya mismo Enseguida" },

    //verbos grupo 4
    { english: "Apologize", spanish: "Presentar excusas" },
    { english: "Apologize to", spanish: "Presentar excusas a" },
    { english: "Agree", spanish: "Estar de acuerdo" },
    { english: "Agree with", spanish: "Estar de acuerdo com" },
    { english: "Disagree", spanish: "No estar de acuerdo" },
    { english: "Disagree with", spanish: "No estar de acuerdo com" },
    { english: "Arrive", spanish: "llegar" },
    { english: "Arrive to", spanish: "llegar a" },
    { english: "Address", spanish: "Dirigir Direccion" },
    { english: "Admit", spanish: "Admitir" },
    { english: "Accept", spanish: "Aceptar" },
    { english: "Believe", spanish: "Creer" },
    { english: "Bother", spanish: "Molestar" },
    { english: "Broadcast", spanish: "Transmitir por radio tv" },
    { english: "Name", spanish: "Nombre" },
    { english: "Discuss", spanish: "Discutir" },
    { english: "Fix", spanish: "Arreglar Desquitarse con" },
    { english: "Help", spanish: "Ayudar Ayuda" },
    { english: "Miss", spanish: "Extrañar Señorita Perder" },
    { english: "Hold", spanish: "Agarrar" },
    { english: "Hold on", spanish: "Resistir" },
    { english: "Hold the line", spanish: "Sostener la linea" },
    { english: "Satisfy", spanish: "Satisfacer" },
    { english: "Meet", spanish: "Encontrar Conocer" },    
    { english: "Remember", spanish: "Recordar" },

    //Vocabulario 1
    { english: "Dad", spanish: "Papa" },
    { english: "Daddy", spanish: "Papa" },
    { english: "Mum", spanish: "Mama" },
    { english: "Parents", spanish: "Padres" },
    { english: "Family", spanish: "Familia" },
    { english: "Wife", spanish: "Esposa" },
    { english: "wives", spanish: "Esposas" },
    { english: "Housewife", spanish: "Ama de casa" },
    { english: "Husband", spanish: "Esposo" },
    { english: "Son", spanish: "Hijo" },
    { english: "Daughter", spanish: "Hija" },
    { english: "Cousin", spanish: "Primo Prima" },
    { english: "Nephew", spanish: "Sobrino" },
    { english: "Niece", spanish: "Sobrina" },
    { english: "Uncle", spanish: "Tio" },
    { english: "Aunt", spanish: "Tia" },
    { english: "Grandpa", spanish: "Abuelo" },
    { english: "Grandma", spanish: "Abuela" },
    { english: "Boy", spanish: "Muchacho" },
    { english: "Girl", spanish: "Muchacha" },
    { english: "Woman", spanish: "Mujer" },
    { english: "Women", spanish: "Mujeres" },
    { english: "Man", spanish: "Hombre" },
    { english: "Men", spanish: "Hombres" },
    { english: "Maid", spanish: "Empleada" },
    { english: "Brother", spanish: "Hermano" },
    { english: "Sister", spanish: "Hermana" },
    { english: "Brother in law", spanish: "Cuñado" },
    { english: "Sister in law", spanish: "Cuñada" },
    { english: "Father", spanish: "Papa" },
    { english: "Mother", spanish: "Mama" },
    { english: "Mother in law", spanish: "Suegra" },
    { english: "Father in law", spanish: "Suegro" },
    { english: "Son in law", spanish: "Yerno" },
    { english: "Daughter in law", spanish: "Nuera" },
    { english: "Step father", spanish: "Padrastro" },
    { english: "Step mother", spanish: "Madrastra" },
    { english: "Step daunghter", spanish: "Hijastra" },
    { english: "Step son", spanish: "Hijastro" },
    { english: "Step brother", spanish: "Hermanastro" },
    { english: "Step sister", spanish: "Hermanastra" },

    //Adjetivos posesivos
    { english: "My", spanish: "Mi Mis" },
    { english: "Your", spanish: "Tu Tus Su de ustedes" },
    { english: "Our", spanish: "Nuestros Nuestras" },
    { english: "Their", spanish: "su sus de ellos ellas" },
    { english: "Her", spanish: "Su Sus de ella" },
    { english: "His", spanish: "Su Sus de el" },
    { english: "Its", spanish: "Su sus de este" },
    //Verbos grupo 5
    { english: "Box", spanish: "Boxear Caja" },
    { english: "Burn", spanish: "Quemar" },
    { english: "Burn up", spanish: "Quemarse por completo" },
    { english: "Comb", spanish: "Peinar Peineta" },
    { english: "Cook", spanish: "Cocinar Cosinero" },
    { english: "Drink", spanish: "Beber Bebida" },
    { english: "Fight", spanish: "Pelear Pelea" },
    { english: "Hunt", spanish: "Cazar" },
    { english: "Hurry", spanish: "Apresurarse" },
    { english: "Hurry to", spanish: "Apresurasse a" },
    { english: "Join", spanish: "Juntar" },
    { english: "Learn", spanish: "Aprender" },
    { english: "Return", spanish: "Regresar" },
    { english: "Teach", spanish: "Enseñar" },
    { english: "Practice", spanish: "Practicar" },
    { english: "Visit", spanish: "Visitar" },
    { english: "Release", spanish: "Liberar" },
    { english: "Require", spanish: "Requerir" },
    { english: "Survive", spanish: "Sobrevivir" },
    { english: "Heat", spanish: "Calentarse" },
    { english: "Cool down", spanish: "Enfriar" },
    //
    { english: "1", spanish: "1" },
    
    
    
    
    
    
    
    
    // Agrega más verbos aquí
  ];
  
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
    }, 2000);
  }
  
  // Inicia el juego al cargar la página
  startGame();
  