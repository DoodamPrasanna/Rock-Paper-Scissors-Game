let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msgbox = document.querySelector("#msg");
const myscore = document.querySelector("#user-score");
const campscore = document.querySelector("#comp-score");
const paragraph = document.querySelector(".para");

const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
}

const drawGame = (userchoice, compchoice) => {
    console.log("The game was Draw.");
    msgbox.innerText = "Game was Draw";
    msgbox.style.backgroundColor = " #081b31";
    paragraph.innerText = `You chose ${userchoice} and computer chose ${compchoice}.`;
};


const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        console.log("You Win!");
        msgbox.innerText = " You Win! ";
        msgbox.style.backgroundColor = "Green";
        paragraph.innerText = `You chose ${userchoice} and computer chose ${compchoice}.`;
        userscore++;
        myscore.innerText = userscore;
    }
    else {
        console.log("You Lose!");
        msgbox.innerText = "You Lose!";
        msgbox.style.backgroundColor = "Red";
        paragraph.innerText = `You chose ${userchoice} and computer chose ${compchoice}.`;
        compscore++ ;
        campscore.innerText = compscore;
    }
};

const playgame = (userchoice) => {
    console.log("userchoice is", userchoice);
    //generate comp choice
    const compchoice = gencompchoice();
    console.log("computer choice is", compchoice);

    if (userchoice === compchoice) {
        drawGame(userchoice, compchoice);
    }
    else {
        let userWin = true;
        if (userchoice === "Rock") {
            userWin = compchoice === "Paper" ? false : true;
        }
        else if (userchoice === "Paper") {
            userWin = compchoice === "Scissors" ? false : true;
        }
        else {
            userWin = compchoice === "Rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    //console.log(choices);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});

const showscore = () =>{


}