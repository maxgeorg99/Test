(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    let status = 1;
    
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        status = Math.max(status,currentQuestion.indicatorNumber);

        // color the answers green
        answerContainers[questionNumber].style.color = 'red';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
    });

    switch(status){
      case "1":    
       resultsContainer.innerHTML = `Die Symptome lassen sich im Rahmen der von ihnen eingenommenen Immun-Chemotherapie erklären und sind nicht gefährlich. Berichten sich von den Syptomen bei ihrem nächsten Kontrolltermin`;																				
      break;
      case "2":    
       resultsContainer.innerHTML = `Die von ihnen beschriebenen Syptome sind nicht gefährlich. Sollten sich diese aber verschlimmern oder länger als 2-3 Tage anhalten, vereinbaren sie einen vorgezognen Kontrolltermin oder stellen sie sich bei ihrem Hausarzt vor.`;																				  
      break;
      case "3":   
       resultsContainer.innerHTML = `Bitte vereinbaren sie einen Kontrolltermin bei ihrem Hausarzt in den nächsten 24h und oder stellen sie sich notfallmässig bei ihrem Onkologen/Dermatologen vor.`;
      break;
      case "4":   
       resultsContainer.innerHTML = `Suchen sie unverzüglich die Notaufnahme ihrer behandelnden Klinik auf. Sollten sie sich ausserhalb ihres Heimatortes aufhalten, wenden sie sich an die Notaufnahme eines überregionalen Klinikums. Nehmen sie alle ihnen vorliegenden ärztlichen Unterlagen mit.`;
      break;
      default:
       resultsContainer.innerHTML = `Fehler`;
    }
  }
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Haben sie neu aufgetretene Entfärbungen der Haut (zb. Fleckeförmig) bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "1"
    },
    {
      question: "Haben sie neu aufgetretenen Ausschlag an sich bemerkt? Verspüren sie vermehrt (im Vergleich zu vor der Behandlung) neu aufgetretenen Juckreiz der Haut?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "1"
    },
    {
      question: "Haben sie aktuell Fieber >38.5° und/oder erhöhte Müdigkeit und Gliederschmerzen? Haben sie im Zusammenhang mit dem Beginn dieser Symptome neu aufgetretene schwärzliche Verfärbungen der Haut (incl. Finger und Zehen) bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "4"
    },
    {
      question: "Haben sie eine neu aufgetretene Mundtrockenheit bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "2"
    },
    {
      question: "Haben sie neu aufgetretenen Durchfall >3x/Tag (ohne Krankheitsgefühl bemerkt)?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "2"
    },
    {
      question: "Haben sie neu aufgetretene Durchfälle und Magen- Darmkrämpfe oder Blut im Stuhlgang bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "3"
    },
        {
      question: "Haben sie in letzter Zeit vermehrt Müdigkeit, Abgeschlagenheit und erhöhtes Schlafbedürfnis bemerkt? Haben sie neu aufgetretene Ödeme (Dicke Beine) bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "3"
    },
        {
      question: "Haben sie neu aufgetreten eine Kombination von Kopfschmerzen, Muskelschwäche, Verstopfung,Gewichtsverlust oder plötzliche Gewichtszunahme, Konzentrationsprobleme, erektile Dysfunktion und Milchproduktion der Brustdrüsen bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "2"
    },
        {
      question: "Haben sie neu aufgetretenen trockenen Husten oder Kurzatmigkeit in Ruhe oder bei Belastung bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "3"
    },
        {
      question: "Haben sie eine Rötung der Augen und vermehrt juckende Augen bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "2"
    },
        {
      question: "Haben sie Gefühlsverluste oder Lähmungen in Armen oder Beinen bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "4"
    },
        {
      question: "Haben sie neu aufgetretene Gelenkbeschwerden bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "3"
    },
        {
      question: "Haben sie einen neu aufgetretenen Ausschlag im Gesicht ( Nase und Wangen) bemerkt?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "3"
    },
        {
      question: "Haben sie Schmerzen im Oberbauch oder im Rücken bemerkt in Kombination mit vermehrter Übelkeit und/oder Erbrechen?",
      answers: {
        a: "Ja",
        b: "Nein",
      },
      correctAnswer: "a",
      indicatorNumber: "4"
    }];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}();
