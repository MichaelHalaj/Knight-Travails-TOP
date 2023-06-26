import Node from './node.js';
const board = (n) => [...Array(n)].map(e => Array(n).fill(0));

let chessboard = board(8);

function knightMoves(src, dest, board = chessboard) {
    const n = board.length - 1;
    let q = [];
    q.push(src);
    let node = new Node(src);
    const dir = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
    let moves = 0;
    while(q.length !== 0) {
        let size = q.length;
        for(let i = 0; i < size; i++) {
            let position = q.shift();
            
            // mark visited positions on the board to avoid revisiting
            board[position[0]][position[1]] = 1;

            if(position[0] === dest[0] && position[1] === dest[1]) {
                console.log(`You made it in ${moves} moves!`)
                return;
            }
            dir.forEach(coordinate => {
                let x = coordinate[0] + position[0];
                let y = coordinate[1] + position[1];
                if (x <= n &&
                    x >= 0 &&
                    y <= n &&
                    y >= 0 &&
                    board[x][y] !== 1) { 
                        q.push([x,y]);
                    }
            });
        }
        moves++;
    }
}

knightMoves([3,3], [4,3])
