const questions = document.querySelectorAll('.question-container');
questions.forEach(question => question.addEventListener('click', showAnswer));

function showAnswer() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        let answers = document.querySelectorAll('.active');
        answers.forEach(answer => answer.classList.remove('active'));
        this.classList.add('active');
    }
}

