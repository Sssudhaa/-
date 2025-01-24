
function showQuestion() {
    // Hide the valentine text
    document.querySelector('.valentine-text').style.display = 'none';

    // Hide the valentine button
    document.getElementById('valentineButton').style.display = 'none';
    
    // Show the question label and buttons
    document.getElementById('questionContainer').classList.remove('hidden');
}

function answerQuestion(answer) {
    // Hide the question label and buttons
    document.getElementById('questionContainer').style.display = 'none';

    if (answer === 'yes') {
        // Display the special message for 'yes' answer
        displaySpecialMessage();
    } 
}

function moveNoButton() {
    // Move the no button to a random position on the page
    const button = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function displaySpecialMessage() {
    // Create a new div for the special message
    const specialMessageDiv = document.createElement('div');
    specialMessageDiv.className = 'special-message';

    // Add the special message text
    specialMessageDiv.innerHTML = `
        <p>Hehe :)</p>
        <p>I knew you'd say yes🌝</p>
        <p>Definitely didn't doubt you and create an anti-no button click</p>
        <p>Oooohhhh, and did I mention how beautiful you are?❤️ or how amazing you are?❤️ or how gorgeous you are?❤️ or how sexy you are?❤️ or how hot you are?❤️ or how amazing you are?❤️or how nice you are?❤️ or how adorable you are?❤️ or how thicc you are?❤️ or how everything else I didn't mention?❤️</p>
        <p>Fun Fact of the day: I'm your Boyfriend and you're mine <3</p>
        <p>P.S I love you with all my heart and you know all those times i say things about me being there for you and you keep saying sorry? Yeah, I meant everyone of those. Plus you're stuck with me now. So enjoy the ride dumbass</p>
    <p>Oh and congratulations on finding a valentines :) <3</p>
        `
           ;

    // Append the special message to the body
    document.body.appendChild(specialMessageDiv);

    // Apply Valentine's Day-themed style to the special message
    specialMessageDiv.style.textAlign = 'center';
    specialMessageDiv.style.color = '#d4145a'; /* Use the same color as the first heart */
    specialMessageDiv.style.fontFamily = 'cursive';
    specialMessageDiv.style.fontSize = '18px';

    // Additional styles as needed
}

