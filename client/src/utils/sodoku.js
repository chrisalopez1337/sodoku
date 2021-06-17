/* Code for the actual game logic */ 
class Sodoku {
    constructor(gameState = null) {
        this.gameState = gameState || "create board here";
    }
    
    /* Methods for checking if a board is valid */
    isValidCube(cubeIdx, customBoard = false) {
        let board = customBoard ? customBoard : this.gameState;
        const used = new Set();
        for (let row = 0; row < board[cubeIdx].length; row++) {
            for (let cell = 0; cell < board[cubeIdx][row].length; cell++) {
                const num = board[cubeIdx][row][cell];
                if (num === null) continue;
                if (used.has(num) || num > 9) return false;
                used.add(num);
            }
        }
        return true;
    }

    isValidRow(rowIdx, customBoard = false) {
        let board = customBoard ? customBoard : this.gameState;
        const used = new Set();
        for (let cube = 0; cube < board.length; cube++) {
            for (let cell = 0; cell < board[cube][rowIdx].length; cell++) {
                const num = board[cube][rowIdx][cell];
                if (num === null) continue;
                if (used.has(num) || num > 9) return false;
                used.add(num);
            }
        }
        return true;
    }
}

// Testing Notes while in DEV

// Indexing
// Board[0-9] ==> A single cube
// Board[Cube][0-3] ==> A single cubes row
// Board[Cube][Row][0-3] ==> A single cubes row's number
// So: Board[CubeIndex][RowIndex][CellIndex]
const Board = [
    // Example of a solved and valid cube
    [ 
        [
            1,
            2,
            3,
        ],
        [
            4,
            5,
            6,
        ],
        [
            7,
            8,
            9,
        ],
    ],
    // Example of an invalid cube and one that isnt solved
    [ 
        [
            3,
            3,
            3,
        ],
        [
            4,
            5,
            6,
        ],
        [
            7,
            8,
            9,
        ],
    ],
];

const game = new Sodoku(Board);
console.log(game.isValidRow(0));
