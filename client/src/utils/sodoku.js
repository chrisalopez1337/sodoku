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
        const cubes = rowIdx <= 3 
            ? board.slice(0, 4) 
            : rowIdx <= 6 
            ? board.slice(4, 7)
            : rowIdx <= 9
            ? board.slice(7, 10)
            : null;
        for (let cube = 0; cube < cubes.length; cube++) {
            for (let cell = 0; cell < cubes[cube][rowIdx].length; cell++) {
                const num = cubes[cube][rowIdx][cell];
                if (num === null) continue;
                if (used.has(num) || num > 9) return false;
                used.add(num);
            }
        }
        return true;
    }

    isValidColumn(colIdx, customBoard = false) {
        let board = customBoard ? customBoard : this.gameState;
        const used = new Set();
        const cubes = [];
        if (colIdx <= 3) { 
            cubes.push(board[0]); cubes.push(board[3]); cubes.push(board[6]);
        } else if (colIdx <=6) {
            cubes.push(board[1]); cubes.push(board[4]); cubes.push(board[7]);
        } else if (colIdx <= 9) {
            cubes.push(board[2]); cubes.push(board[5]); cubes.push(board[8]);
        }
        for (let cube = 0; cube < cubes.length; cube++) {
            for (let row = 0; row < cubes[cube].length; row++) {
                const num = cubes[cube][row][colIdx];
                console.log(num);
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
    [ 
        [
            1,
            2,
            3,
        ],
        [
            2,
            5,
            6,
        ],
        [
            3,
            8,
            9,
        ],
    ],
    [ 
        [
            4,
            5,
            6,
        ],
        [
            5,
            5,
            6,
        ],
        [
            6,
            8,
            9,
        ],
    ],
    [ 
        [
            7,
            8,
            9,
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
    [ 
        [
            4,
            5,
            6,
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
    [ 
        [
            7,
            8,
            9,
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
    [ 
        [
            4,
            5,
            6,
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
    [ 
        [
            7,
            8,
            9,
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
console.log(game.gameState);
console.log(game.isValidColumn(0));
