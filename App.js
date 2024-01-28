let game = document.getElementsByClassName("game");
//console.log(game);

let boxes = document.querySelectorAll(".box");
//console.log(boxes);

let resetBtn = document.getElementById("reset-btn");
//console.log(resetBtn);

let newGamebtn = document.querySelector("#new-btn");
//console.log(newGamebtn);
let messageContainer = document.querySelector(".msg-container");
//console.log(messageContainer);
let win = document.querySelector("#message");
//console.log(win);


let playero = true;

const resetgame = () =>{
  playero = true; 
  enablebox();
  messageContainer.classList.add("hide"); 
};

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//console.log(winPattern[1]);

boxes.forEach((box) =>{
    box.addEventListener('click', ()=> {
        //console.log("Box was clicked");
        if(playero){
            box.innerText = "O";
            box.style.color = "#febe29";
            playero=false;
        }
        else{
            box.innerText = "X";
            box.style.color = "magenta";
            playero=true;
        }
        box.disabled = true;
        checkWinner();
    });
});



const checkWinner = () =>{
    for(let pattern of winPattern){
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;

        if(value1 != "" && value2!= "" && value3 != ""){
             //console.log(`${value1} ${value2} ${value3}`);
            if(value1 === value2 && value2 === value3){
                //console.log("winner",value1);
                showWinner(value1);
            };
        };
    };
};

const disablebox = () =>{
   for(let box of boxes){
        box.disabled = true;
   }; 
};

const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }; 
 };

const showWinner = (winner) =>{
    message.innerText=`Congratulation winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disablebox();
};

newGamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
