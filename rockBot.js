//always P1

class Bot {
    makeMove(gamestate) {
            const standardMoves = ['R','P','S'];
            const random = standardMoves[Math.floor(Math.random() * standardMoves.length)];



        gamestate.rounds.forEach(function(round) {
            if(rounds ) {
                let move = 'W';
                return move;
            } else if (round === 4) {
                let move = 'D';
                return move;
            } else {
                let move = random;
                return move;                
            }
        });
            return random;
    }
}

module.exports = new Bot();