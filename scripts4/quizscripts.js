(function(){
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
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
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
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1.Mardi Gras is one day?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "2.  Mardi Gras is the same date every year?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "3. It is customary to flash at Mardi Gras?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "4.Mardi Gras is a family event?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "5.People wear costumes at Mardi Gras?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "6.Only beads are thrown at Mardi Gras?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
      },
      {
        question: "7.  A king cake baby represents the baby Jesus?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "8.Mardi Gras ends at Midnight on Fat Tuesday?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "9.  Mardi Gras’ success is measured in trash?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
      {
        question: "10. There’s a meaning behind the Mardi Gras colors?",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();