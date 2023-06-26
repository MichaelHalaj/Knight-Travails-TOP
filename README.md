# Knight-Travails-TOP
Built a function that shows the shortest path for a knight to travel from one position on a chessboard to another.

```Node``` - class/factory that contains a data attribute and a parent attribute

```knightMoves``` - accepts ```src``` (starting point of knight on chessboard) and ```dest``` (ending point of knight on chessboard) as parameters and utilizes the breadth-first-search algoritm to find the shortest path between the two parameters

```createChessBoard``` - function to create a new $8\times8$ chessboard using a 2D array filled with 0s

```printPath``` - recursive function that takes a node as a parameter and tracks back through parent nodes to print out the knight's path
