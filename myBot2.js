class Bot {
    makeMove(gamestate) {

        let standardMoves = ['R','P','S'];
        let moves = standardMoves[Math.floor(Math.random() * standardMoves.length)];
        return moves;
            
}
}
module.exports = new Bot();