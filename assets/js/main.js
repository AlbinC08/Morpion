let round = 1
let canplay = true
let modeCpu = false
let player1 = 'Joueur 1'
let player2 = 'Joueur 2'
let current_player = player1
let gameover = false
let grid = document.querySelectorAll('.case')
let grid_length = 0
let modePowerFour = false
let victoryConditionPowerFour = [
    //les victoires horizontales
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    //les victoires verticales
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
    [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
    [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
    [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
    [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
    //les victoires diagonales haut -> droite
    [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
    [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
    [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41],
    //les victoires diagonales haut -> gauche
    [6, 12, 18, 24], [5, 11, 17, 23], [4, 10, 16, 22], [3, 9, 15, 21],
    [13, 19, 25, 31], [12, 18, 24, 30], [11, 17, 23, 29], [10, 16, 22, 28],
    [20, 26, 32, 38], [19, 25, 31, 37], [18, 24, 30, 36], [17, 23, 29, 35]
];
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
        if (current_player == player2 && modeCpu == true) {
            canplay = false
            setTimeout(function () {
                CPUplay()
            }, 1000)

        }
    }
    if (round % 2 != 0) {
        current_player = player1
    }
}
change_player()

function display_token(element) {
    if (current_player == player1) {
        element.innerText = 'X'
        element.style.backgroundImage = 'url(assets/images/X3.png)';
        element.style.backgroundSize = '80%';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = 'center';
    }
    if (current_player == player2) {
        element.innerText = 'O'
        element.style.backgroundImage = 'url(assets/images/O5.png)';
        element.style.backgroundSize = '70%';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.backgroundPosition = 'center';
    }
    if (current_player == player1 && modePowerFour == true) {
        element.innerText = 'X'
        element.style.backgroundImage = 'url(assets/images/token_red.png)';
        element.style.backgroundSize = 'cover';
    }
    if (current_player == player2 && modePowerFour == true) {
        element.innerText = 'O'
        element.style.backgroundImage = 'url(assets/images/token_blue.png)';
        element.style.backgroundSize = 'cover';
    }
}

function display_current_player() {
    document.querySelector('#display_current_player').innerText = current_player
    if (gameover == true) {
    document.querySelector('#display_current_player').innerText = ''
    }
}



function game(element) {
    if (canplay) {


        if (element.innerText == "" && !gameover && round < grid_length && modePowerFour == false) {
            display_token(element)
            victory_condition()
            console.log(victoryCondition);
            round++
            console.log(round);
            change_player()
            display_current_player()
        }
        if (element.innerText == "" && !gameover && round < grid_length + 1 && modePowerFour == true) {
            display_token(element)
            victory_condition_power_four()
            console.log(victoryConditionPowerFour);
            round++
            console.log(round);
            change_player()
            display_current_player()
        }
        if (round == grid_length && gameover == false) {
            document.querySelector('#message').innerText = 'Match Nul'
            document.querySelector('#display_current_player').innerText = ''

        }
    }

}

function reset() {
    let empty_case = document.querySelectorAll('.case')
    for (let i = 0; i < empty_case.length; i++) {
        empty_case[i].innerText = ''
    }
    let empty_case2 = document.querySelectorAll('.case')
    for (let i = 0; i < empty_case2.length; i++) {
        empty_case2[i].style.backgroundImage = '';
    }
    gameover = false
    current_player = player1
    round = 1
    document.querySelector('#display_current_player').innerText = 'Joueur 1'
    document.querySelector('#message').innerText = ''
}



function victory_condition_power_four() {
    for (let i = 0; i < victoryConditionPowerFour.length; i++) {
        let innerCell1 = document.querySelectorAll(".case")[victoryConditionPowerFour[i][0]].innerHTML
        let innerCell2 = document.querySelectorAll(".case")[victoryConditionPowerFour[i][1]].innerHTML
        let innerCell3 = document.querySelectorAll(".case")[victoryConditionPowerFour[i][2]].innerHTML
        let innerCell4 = document.querySelectorAll(".case")[victoryConditionPowerFour[i][3]].innerHTML
        if (innerCell1 == "" || innerCell2 == "" || innerCell3 == "" || innerCell4 == "") {
            continue
        }
        if (innerCell1 == innerCell2 && innerCell2 == innerCell3 && innerCell3 == innerCell4) {
            document.querySelector('#message').innerText = 'bravo ' + current_player + ' gagne'
            gameover = true
            console.log('gameover');

        }
    }
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

function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function CPUplay() {
    let count = 1
    canplay = true
    while (true) {
        let random = aleatoire(0, document.querySelectorAll('.case').length - 1)
        if (count == document.querySelectorAll('.case').length) {
            break
        }
        if (document.querySelectorAll('.case')[random].innerText == '') {
            document.querySelectorAll('.case')[random].click()
            break
        }
        count++
    }
}

function game_mode_toggle() {
    modeCpu = !modeCpu
    console.log(modeCpu);
    if (modeCpu == true) {
        document.querySelector('#toggle').innerHTML = 'joueur<img src="assets/images/vs.png" alt="">Cpu'
        player2 = 'CPU'
        console.log(player2);
    } else {
        document.querySelector('#toggle').innerHTML = 'joueur<img src="assets/images/vs.png" alt="">Joueur'
        player2 = 'Joueur 2'
        console.log(player2);

    }
}

function createGrid(nmbLine, nmbCase, grid_l, mode) {
    clearin()
    grid_length = grid_l
    modePowerFour = mode
    for (let i = 0; i < nmbLine; i++) {
        let trElement = document.createElement('tr')
        trElement.classList.add('line' + i)
        document.querySelector('table').appendChild(trElement)
        for (let j = 0; j < nmbCase; j++) {
            let tdElement = document.createElement('td')
            trElement.appendChild(tdElement)
            tdElement.classList.add('case')
            tdElement.addEventListener('click', function () {
                game(tdElement, trElement)
            })
        }
    }
    if (modePowerFour == true) {
        console.log('h1');
        document.querySelector('#h1').innerText = 'Puissance 4'
        let power_for_grid = document.querySelectorAll('.case')
        for (let i = 0; i < power_for_grid.length; i++) {
            power_for_grid[i].style.width = '75px'
            power_for_grid[i].style.height = '75px'
        }
    } else {
        document.querySelector('#h1').innerText = 'Morpion qui gratte pas'
    }
    reset()
}

function clearin() {
    document.querySelector('table').innerHTML = ""
}

function theme1() {
    document.body.style.backgroundColor = 'white'

}
function theme2() {
    document.body.style.backgroundColor = 'green'
}
function theme3() {
    document.body.style.backgroundColor = 'red'
}

