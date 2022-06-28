let round = 1
const player1 = 'Joueur 1'
const player2 = 'Joueur 2'
let game_stat = ['', '', '', '', '', '', '', '', '']
let current_player = player1
let gameover = false
let victoryCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

function change_player() {
    if (round % 2 == 0) {
        current_player = player2

    } else {
        current_player = player1
    }
}
change_player()

function display_XorO(element) {
    if (current_player == player1) {
        element.innerText = 'O'
    } else {
        element.innerText = 'X'
    }
}

function display_current_player() {
    document.querySelector('#display_current_player').innerText = current_player
}



function game(element) {

    if (element.innerText == "" && !gameover) {
        display_XorO(element)
        victory_condition()
        console.log(victoryCondition);
        round++
        console.log(round);
        change_player()
        display_current_player()
    }
    if (round == 10 && gameover == false) {
    document.querySelector('#display_current_player').innerText = 'Match Nul'        
    }
   
}

function reset() {
    let empty_case = document.querySelectorAll('.case')
    for (let i = 0; i < empty_case.length; i++) {
        empty_case[i].innerText = ''        
    }
    gameover = false
    current_player = player1
    round = 1
    document.querySelector('#display_current_player').innerText = 'Joueur 1'
    document.querySelector('#message').innerText = ''
}



function victory_condition() {
    for (let i = 0; i < victoryCondition.length; i++) {
        let innerCell1 = document.querySelectorAll(".case")[victoryCondition[i][0]].innerHTML
        let innerCell2 = document.querySelectorAll(".case")[victoryCondition[i][1]].innerHTML
        let innerCell3 = document.querySelectorAll(".case")[victoryCondition[i][2]].innerHTML
        if (innerCell1 == "" || innerCell2 == "" || innerCell3 == "") {
            continue
        }
        if (innerCell1 == innerCell2 && innerCell2 == innerCell3) {
            document.querySelector('#message').innerText = 'bravo ' + current_player + ' gagne'
            gameover = true
            console.log('gameover');

        }
    }
}


for (let i = 0; i < document.querySelectorAll('.case').length; i++) {
    if (document.querySelectorAll('.case')[i].innerText != '') {
        console.log('ivuhvuhvv');
    }
}


function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}



