let pac_x = 10
let pac_y = 1

let coin_1_x = parseInt( 1 + Math.random() * 9 )
let coin_1_y = parseInt( 1 + Math.random() * 9 )

let coin_1_visited = false

let coin_2_x = parseInt( 1 + Math.random() * 9 )
let coin_2_y = parseInt( 1 + Math.random() * 9 )

let coin_2_visited = false

let bomb_1_x = parseInt( 1 + Math.random() * 9 )
let bomb_1_y = parseInt( 1 + Math.random() * 9 )

let bomb_1_visited = false

let bomb_2_x = parseInt( 1 + Math.random() * 9 )
let bomb_2_y = parseInt( 1 + Math.random() * 9 )

let bomb_2_visited = false

let score  = 0
let live  = 100

function action() { 

    switch ( event.key ) {
        case "w" : pac_x-- ;
            if ( pac_x < 1 ) {
                pac_x = 10
            } 
        break
        case "a" : pac_y-- ;
            if ( pac_y < 1 ) {
                pac_y = 10
            }
        break
        case "s" : pac_x++ ;
            if ( pac_x > 10 ) {
                pac_x = 1
            }
        break
        case "d" : pac_y++ ;
            if ( pac_y > 10 ) {
                pac_y = 1
            }
        break
    }

    if ( pac_x == coin_1_x && pac_y == coin_1_y ) {
        coin_1_visited = true
        score += 10
    }
    if ( pac_x == coin_2_x && pac_y == coin_2_y ) {
        coin_2_visited = true
        score += 10
    }
    if (score == 100) {
        gameMap.innerHTML = document.write(`
                <h1 style="
                    text-align: center;
                    text-decoration: underline;
                    font-family: Arial;
                    font-size: 50px;
                    margin-top: 100px;
                ">Epic Win!!! :)</h1>
            `)
    }
    if ( pac_x == bomb_1_x && pac_y == bomb_1_y ) {
        bomb_1_visited = true
        live -= 20
    }
    if ( pac_x == bomb_2_x && pac_y == bomb_2_y ) {
        bomb_2_visited = true
        live -= 20
    }
    if (live == 0) {
        gameMap.innerHTML = document.write
        (`
            <h1 style="
                text-align: center;
                text-decoration: underline;
                font-family: Arial;
                font-size: 50px;
                margin-top: 100px;
            ">Game Over!!! :(</h1>
        `)
    }

    renderMap()
}

function renderMap() {
    gameMap.innerHTML = ``
    for ( let x = 1 ; x <= 10 ; x++ ) {

        for ( let y = 1 ; y <= 10 ; y++ ) {

            if ( x == pac_x && y == pac_y ) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x == coin_1_x && y == coin_1_y && coin_1_visited == false) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x == coin_2_x && y == coin_2_y && coin_2_visited == false) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x == bomb_1_x && y == bomb_1_y && bomb_1_visited == false) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else if (x == bomb_2_x && y == bomb_2_y && bomb_2_visited == false) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `<br>Score: ${score}.`
    healthPoints.innerHTML = `<br>Health Points: ${live}.`
}

renderMap()