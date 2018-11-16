//always P1

class Bot {

    makeMove(gamestate) {

        let dynamiteArray = gamestate.rounds.filter(function(round){
            if(round.p1 === "D") {
                return true;
            }
        });

        let dynamite = dynamiteArray.length;

        let move;
    
        if(dynamite < 100) {
            let standardMoves = ['R','P','S','D'];
            let moves = standardMoves[Math.floor(Math.random() * standardMoves.length)];
            // console.log('Dynamite ' + moves);
            move = moves;
        } else {
            let standardMoves = ['R','P','S'];
            let moves = standardMoves[Math.floor(Math.random() * standardMoves.length)];
            // console.log('NoDynamite ' + moves);
            move = moves;
        }
        // console.log(move)
        return move;
    }
}

module.exports = new Bot();