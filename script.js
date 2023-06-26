import Node from './node.js';
function createChessBoard() {
    const board = (n) => [...Array(n)].map(e => Array(n).fill(0));
    return board(8);
}

let printPath = (node) => {
    if(node === null) {
        return;
    }
    printPath(node.parent);
    console.log(node.data);
};

function knightMoves(src, dest) {
    const board = createChessBoard();
    const n = board.length - 1;
    let q = [];
    
    let node = new Node(src);
    q.push(node);
    const dir = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
    let moves = 0;
    while(q.length !== 0) {
        let size = q.length;
        for(let i = 0; i < size; i++) {
            let parentNode = q.shift();
            let position = parentNode.data;

            // mark visited positions on the board to avoid revisiting
            board[position[0]][position[1]] = 1;

            if(position[0] === dest[0] && position[1] === dest[1]) {
                console.log(`You made it in ${moves} moves! Here's your path:`);
                printPath(parentNode);
                console.log('\n');
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
                        const newNode = new Node([x, y], parentNode);
                        q.push(newNode);
                    }
            });
        }
        moves++;
    }
}
knightMoves([0,0],[1,2]);
knightMoves([3,3], [4,3]);
knightMoves([0,0],[3,3]);
knightMoves([3,3],[0,0]);

