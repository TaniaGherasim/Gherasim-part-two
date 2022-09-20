let playerName = '';
let promptIndex = 0;
let numberOfHoles = 6;
let Hole1;
let Hole2;
let Hole3;
let Hole4;
let Hole5;
let Hole6;
let totalPar;

for (let i = 0; i < 8; i++) {
    onSubmit();
}

function onSubmit() {
    if (promptIndex === 0) {
        playerName = prompt("Welcome to GC mini golf! What is your name?");
    }

    if (promptIndex === 1) {
        numberOfHoles = Number(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`));
    }

    if (promptIndex === 2) {
        Hole1 = Number(prompt('How many putts for hole 1? (par: 3)')); 
    }

    if (promptIndex === 3) {
        Hole2 = Number(prompt('How many putts for hole 2? (par: 3)'));
    }

    if (promptIndex === 4) {
        Hole3 = Number(prompt('How many putts for hole 3? (par: 3)'));
        if (numberOfHoles === 3) {
            promptIndex = 7;
        }
    }

    if (promptIndex === 5) {
        Hole4 = Number(prompt('How many putts for hole 4? (par: 3)'));
    }

    if (promptIndex === 6) {
        Hole5 = Number(prompt('How many putts for hole 5? (par: 3)'));
        Hole6 = Number(prompt('How many putts for hole 6? (par: 3)'));
    }

    if (promptIndex === 7) {
        if (numberOfHoles === 3) {
            const userScore =
                Hole1 +
                Hole2 +
                Hole3;
            totalPar = (userScore - 9).toString();
            if (totalPar < 0) {
                console.log('Great job, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            } else if (totalPar > 0) {
                console.log('Nice try, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            } else {
                console.log('Good game, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            }
        } else {
            const userScore =
                Hole1 +
                Hole2 +
                Hole3 +
                Hole4 +
                Hole5 +
                Hole6;
            totalPar = (userScore - 18).toString();
            if (totalPar < 0) {
                console.log('Great job, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            } else if (totalPar > 0) {
                console.log('Nice try, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            } else {
                console.log('Good game, '+ playerName+ '! Your total par was: '+ totalPar+'.');
            }
        }

    }

    promptIndex += 1;

}