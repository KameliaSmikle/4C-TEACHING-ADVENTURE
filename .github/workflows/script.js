/* script.js */
let currentLevel = 0;
const levels = [
    {
        title: "Communication Challenge",
        question: "Your students are struggling to understand a concept. How will you explain it?",
        choices: [
            "Use lots of text on PowerPoint slides",
            "Use visual aids and relatable examples",
            "Give a lengthy technical explanation"
        ],
        feedback: [
            "Too much text can overwhelm students.",
            "Great choice! Visual aids make learning engaging and relatable.",
            "Overly technical explanations may confuse students."
        ]
    },
    {
        title: "Collaboration Challenge",
        question: "How will you help students collaborate effectively during a group project?",
        choices: [
            "Assign tasks randomly",
            "Let students choose tasks based on strengths",
            "Let the group work without guidance"
        ],
        feedback: [
            "Random task assignment can cause confusion.",
            "Excellent! Assigning tasks based on strengths fosters teamwork.",
            "Without guidance, collaboration may break down."
        ]
    },
    {
        title: "Critical Thinking Challenge",
        question: "How will you promote critical thinking during a debate?",
        choices: [
            "Give students the answers",
            "Encourage them to research and analyze data",
            "Let them argue without structure"
        ],
        feedback: [
            "Giving answers hinders independent thinking.",
            "Great choice! Research encourages critical thinking.",
            "Unstructured debates may create confusion."
        ]
    },
    {
        title: "Creativity Challenge",
        question: "How will you inspire creativity in a lesson plan?",
        choices: [
            "Use traditional lectures and quizzes",
            "Incorporate multimedia and interactive activities",
            "Stick to worksheets"
        ],
        feedback: [
            "Lectures alone may not engage students creatively.",
            "Awesome! Interactive activities spark creativity.",
            "Worksheets lack excitement and creativity."
        ]
    }
];

function makeChoice(choiceIndex) {
    const level = levels[currentLevel];
    const feedback = level.feedback[choiceIndex];
    document.getElementById('feedback').textContent = feedback;
    document.getElementById('feedback').style.display = "block";
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        endGame();
    }
}

function loadLevel() {
    const level = levels[currentLevel];
    document.getElementById('level-title').textContent = level.title;
    document.getElementById('game-question').textContent = level.question;
    const choicesDiv = document.querySelector('.choices');
    choicesDiv.innerHTML = '';
    level.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.onclick = () => makeChoice(index);
        choicesDiv.appendChild(button);
    });
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-btn').classList.add('hidden');
}

function endGame() {
    document.getElementById('game-content').innerHTML = `
        <h2>Congratulations!</h2>
        <p>You’ve completed the 4C Teaching Adventure. Keep inspiring your students!</p>
    `;
}

// Initialize the first level
loadLevel();
