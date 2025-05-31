let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgcontainer");
let finalmsg = document.querySelector("#msg");
let startnew = document.querySelector("#newbtn");


let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach( (box) => {
    box.addEventListener("click", ()=>{
        console.log("button was clikced");
        if(turnO === true)
        {
         box.innerText = "O";
         turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const newbtnfunc= () => {
    turnO = true;
    enable();
    msgcontainer.classList.add("hide");
}
const disable = () =>{
    for(let j of boxes)
    {
        j.disabled = true;
    }
}

const enable = () =>{
    for(let j of boxes)
    {
        j.disabled = false;
        j.innerText = "";
    }
}
const showwinner = (pos0) => {
    finalmsg.innerText = `CONGRATULATION WINNER IS ${pos0}`;
    msgcontainer.classList.remove("hide");
    disable();
}

const checkwinner = () => {
    for(i of winpatterns){
            let pos0 = boxes[i[0]].innerText;
            let pos1 = boxes[i[1]].innerText;
            let pos2 = boxes[i[2]].innerText;

            if(pos0 != "" && pos1 != "" &&pos2 != "")
            {
                if(pos0 === pos1 && pos1 === pos2)
                {
                    console.log(`winner ${pos0}`);
                    showwinner(pos0);
                }
            }
    }
}

startnew.addEventListener("click",newbtnfunc);
resetbtn.addEventListener("click",newbtnfunc);