const tictactoe = (function () {
    let playerOne = 'X';
    let playerTwo = 'O';
    let gameboard = [
        '', '', '', 
        '', '', '', 
        '', '', '',
    ];

    function getPlayerOne(){
        return playerOne;
    }

    function getPlayerTwo(){
        return playerTwo;
    }

    function playerMove(player, index){
        gameboard[index] = player;
    }

    function restartBoard(){
        gameboard = [
            '', '', '', 
            '', '', '', 
            '', '', '',
        ];
    }

    function isBoardFull(){
        return gameboard.every(element => element === 'X' || element === 'O');
    }

    function displayBoard(){
        let result = [];
        for(let i = 0; i < gameboard.length; i++){
            result += gameboard[i];
            if((i + 1) % 3 === 0){
                result += "\n";
            } else{
                result += ' ';
            }
        }
        return result;
    }

    function checkWinner(){
        const winningCombinations = [
            ['0','1','2'],
            ['3', '4', '5'], 
            ['6', '7', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
        ]

        for(let i = 0; i < winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i];
            if(gameboard[a] && gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c]){
                return true;
            }
        }

        return false;
    }

    return {playerMove, checkWinner, getPlayerOne, getPlayerTwo, displayBoard, restartBoard, isBoardFull};
})();

const displayController = (function (){
    const gameResults = document.querySelector("#gameResults")
    let gameOver = false;
    let is_playerOne = true;

    function clearBoard(){
        const cell = document.querySelectorAll(".cell");
        cell.forEach(element => {
            element.textContent = "";
        })
    }

    function boardLogic(){
        const cell = document.querySelectorAll(".cell");
        let playerXwins = document.querySelector("#playerXwins");
        let playerOwins = document.querySelector("#playerOwins");
        let playerX = 1;
        let playerO = 1;
        cell.forEach(element => {
            const index = element.getAttribute("data-id");
            element.addEventListener("click", () => {
                if (element.childNodes.length > 0) {
                    return;  
                }
                if(gameOver === true){
                    return;                    
                }

                let player;
                if(is_playerOne === true){
                    player = tictactoe.getPlayerOne();
                } else {
                    player = tictactoe.getPlayerTwo();
                }
                tictactoe.playerMove(player, index);
                element.textContent = player;
                is_playerOne = !is_playerOne;

                if(tictactoe.checkWinner() === true){
                    gameOver = true;
                    gameResults.textContent = `Player ${player} wins!`
                    if(player === 'X'){
                        playerXwins.textContent = `${playerX++}`
                    } else{
                        playerOwins.textContent = `${playerO++}`
                    }
                } else if(tictactoe.isBoardFull() === true){
                    gameOver = true;
                    gameResults.textContent = "its a draw";
                }

                console.log(tictactoe.displayBoard());
                console.log(tictactoe.checkWinner());
            })
        })

    

        const restartButton = document.querySelector("#restartButton");
        restartButton.addEventListener("click", () => {
            tictactoe.restartBoard();
            clearBoard();
            gameResults.textContent = "";
            gameOver = false;
            is_playerOne = true;
            console.log(tictactoe.displayBoard());
        })
    
    }
    return {boardLogic};
})();

displayController.boardLogic();


