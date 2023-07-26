let first_card 
let second_card 
let array
let sum

let hasblackjack=false;
let isalive=false;
let message="";
let playername="vibhu";
let playerchips=145;
let player=document.getElementById("player");
player.textContent= playername + playerchips;

function random_number(){
let number=Math.floor(Math.random()*13)+1;
if(number>10){
    return 10;
}else if(number === 1){
    return 11;
}
else{
return number;
}}
 
function startGame(){
    isalive=true;
    first_card = random_number();
 second_card =random_number();
 array=[first_card,second_card];
 sum=first_card+second_card;
    renderGame();
}
function renderGame(){ 
    document.getElementById("card-El").innerText='Cards: ';
    for(let i=0;i<array.length;i++){
        document.getElementById("card-El").textContent += array[i] + " ";
        
        }
        document.getElementById("sum-El").innerText= `Sum: ${sum}`;   
if(sum <= 20){
document.getElementById("message-El").innerText="do you want to draw a card"
}


else if(sum === 21){
    document.getElementById("message-El").innerText="wooh! you got black jack"
hasblackjack=true; 
}
else{
    document.getElementById("message-El").innerText="better luck next time";
    isalive=false;
 
}
//cash out;


}
function newCard(){
    if(isalive===true && hasblackjack===false){
    let random;
    random=random_number();
    sum+=random;
    array.push(random);
    // let random_1=first_card+second_card+random;
    
    renderGame();
    }
}
    