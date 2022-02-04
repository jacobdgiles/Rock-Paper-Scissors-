/** make a function that is called computer play
 * this fuction should return at random Rock, Paper
 *  or sicssors
 */ 
let randomChoice = Math.floor(Math.random()*100) + 1;
function computerPlay() {
   
    if (randomChoice < 33.3) {
     console.log ("rock")
    }
    else if (randomChoice > 33.3){
        console.log ("Paper")
    }
    else {
        console.log("sicssors")
    }
   return randomChoice
}
computerPlay()
