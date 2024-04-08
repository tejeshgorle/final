document.addEventListener("DOMContentLoaded", function() {
    const askQuestionBtn = document.getElementById('askQuestion');
    const questionForm = document.getElementById('questionForm');
    const questionsContainer = document.getElementById('questions');

    askQuestionBtn.addEventListener('click', function() {
        questionForm.style.display = 'block';
    });

    const submitQuestionBtn = document.getElementById('submitQuestion');

    submitQuestionBtn.addEventListener('click', function() {
        const questionInput = document.getElementById('questionInput').value;
        console.log('Submitted Question:', questionInput);
        addQuestion(questionInput);
        questionForm.style.display = 'none';
        alert('Question submitted successfully!');
    });

    function addQuestion(questionText) {
        const newQuestion = document.createElement('div');
        newQuestion.className = 'question';
        newQuestion.innerHTML = `
            <h3>${questionText}</h3>
            <button class="answerBtn">Answer</button>
            <div class="answerForm" style="display: none;">
                <label for="answerInput">Your Answer:</label><br>
                <textarea class="answerInput" rows="4" cols="50"></textarea><br>
                <button class="submitAnswer">Submit Answer</button>
                <div class="answer"></div>
            </div>
        `;
        questionsContainer.appendChild(newQuestion);
    }

    questionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('answerBtn')) {
            const answerForm = event.target.nextElementSibling;
            answerForm.style.display = 'block';
        }
    });

    questionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('submitAnswer')) {
            const answerInput = event.target.parentNode.querySelector('.answerInput').value;
            const answerDiv = event.target.parentNode.querySelector('.answer');
            const answerPara = document.createElement('p');
            answerPara.innerHTML = `<strong>Answer:</strong> ${answerInput}`;
            answerDiv.appendChild(answerPara);
            console.log('Submitted Answer:', answerInput);
            alert('Answer submitted successfully!');
        }
    });
});

function addPaper() {
    var title = document.getElementById("paperTitle").value.trim();
    var author = document.getElementById("paperAuthor").value.trim();
    var field = document.getElementById("paperField").value.trim();
    var date = document.getElementById("paperDate").value.trim();
    var link = document.getElementById("paperLink").value.trim();

    // Check if any field is empty
    if (title === "" || author === "" || field === "" || date === "" || link === "") {
        alert("Please fill in all fields");
        return;
    }

    var newPaper = document.createElement("div");
    newPaper.classList.add("paper");

    newPaper.innerHTML = "<h3>" + title + "</h3>" +
        "<p>" + author + "</p>" +
        "<p>" + field + "</p>" +
        "<p>Published on " + date + "</p>" +
        "<p>Document Link: <a href='" + link + "'>" + title + "</a></p>";

    document.getElementById("publishedPapers").appendChild(newPaper);
    alert('Paper added successfully!');

    // Clear form fields
    document.getElementById("paperTitle").value = "";
    document.getElementById("paperAuthor").value = "";
    document.getElementById("paperField").value = "";
    document.getElementById("paperDate").value = "";
    document.getElementById("paperLink").value = "";
}
