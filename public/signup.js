const sentences = [
    "Innovate",
    "Educate",
    "Succeed"
];

let index = 0;

function changeSentence() {
    const currentSentence = sentences[index];
    const changingSentence = document.getElementById("changing-sentence");

    
    changingSentence.textContent = currentSentence;

    
    changingSentence.classList.remove("zoom-in");
    void changingSentence.offsetWidth;
    changingSentence.classList.add("zoom-in");


    index = (index + 1) % sentences.length;

    
    setTimeout(changeSentence, 4000); 
}
changeSentence();