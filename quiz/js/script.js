let scores = {}; // Object to hold scores for each quiz

// Dynamically generate the quiz questions and load progress
window.onload = function() {
    const mainContainer = document.getElementById('main-quiz-container');

    quizzes.forEach((quiz, quizIndex) => {
        // Initialize scores for the current quiz
        scores[quizIndex] = 0;

        // Create a container for each quiz
        const quizContainer = document.createElement('div');
        quizContainer.classList.add('quiz-container');
        quizContainer.innerHTML = `<h2>${quiz.title}</h2>`;
        
        const quizContent = document.createElement('div');
        quizContent.id = `quiz-content-${quizIndex}`;
        quizContainer.appendChild(quizContent);

        quiz.questions.forEach((questionObj, index) => {
            // Create a div for each question
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.id = `question-${quizIndex}-${index + 1}`;

            // Add the question text
            const questionText = document.createElement('p');
            questionText.textContent = questionObj.question;
            questionDiv.appendChild(questionText);

            // Create radio buttons for the options
            questionObj.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q${quizIndex}-${index + 1}`;
                input.value = option.value;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option.text));
                questionDiv.appendChild(label);
                questionDiv.appendChild(document.createElement('br'));
            });

            // Add a submit button for each question
            const submitButton = document.createElement('button');
            submitButton.textContent = `Submit Question ${index + 1}`;
            submitButton.onclick = function() {
                checkQuestion(quizIndex, index + 1, questionObj.correctAnswer, questionObj.explanation, submitButton);
            };
            questionDiv.appendChild(submitButton);

            // Add a result div for each question (for answer and explanation)
            const resultDiv = document.createElement('div');
            resultDiv.id = `result-q${quizIndex}-${index + 1}`;
            questionDiv.appendChild(resultDiv);

            // Append the entire question div to the quiz content
            quizContent.appendChild(questionDiv);
        });

        // Add a total score button for each quiz
        const totalScoreButton = document.createElement('button');
        totalScoreButton.textContent = "Show Total Score";
        totalScoreButton.onclick = function() {
            alert(`Your total score for Quiz ${quizIndex + 1} is: ${scores[quizIndex]}/${quiz.questions.length}`);
        };
        quizContainer.appendChild(totalScoreButton); // Append total score button to the quiz container

        // Add the quiz container to the main container
        mainContainer.appendChild(quizContainer);
    });
};

function checkQuestion(quizIndex, questionNumber, correctAnswer, explanation, submitButton) {
    const selectedAnswer = document.querySelector(`input[name="q${quizIndex}-${questionNumber}"]:checked`);
    const resultDiv = document.getElementById(`result-q${quizIndex}-${questionNumber}`);

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            scores[quizIndex]++;
            resultDiv.innerHTML = `Correct! ${explanation}`;
            submitButton.textContent = "Correct!";
            submitButton.style.backgroundColor = "green"; // Change button color to green
        } else {
            resultDiv.innerHTML = `Incorrect! ${explanation}`;
            submitButton.textContent = "Wrong!";
            submitButton.style.backgroundColor = "red"; // Change button color to red
        }
        disableQuestion(quizIndex, questionNumber);
    } else {
        resultDiv.innerHTML = "Please select an answer.";
    }
}

// Disable the question after submission
function disableQuestion(quizIndex, questionNumber) {
    const inputs = document.querySelectorAll(`input[name="q${quizIndex}-${questionNumber}"]`);
    inputs.forEach(input => input.disabled = true);
    const button = document.querySelector(`#question-${quizIndex}-${questionNumber} button`);
    button.disabled = true;
}
