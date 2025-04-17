let boxes=document.querySelectorAll(".box");
let header=document.querySelector(".head");
let btn=document.querySelector(".reset");
let btn1=document.querySelector(".newgame");

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

let text=true;
let winner=false;

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(text){
        box.innerHTML="o";
        text=false;
    }
   else{
    box.innerHTML="x";
    text=true;
   }
   box.disabled=true;
   cheackwin();
  });
});

const cheackwin=()=>{
    for(let i of winpattern){
        let posvalue1=boxes[i[0]].innerHTML;
        let posvalue2=boxes[i[1]].innerHTML;
        let posvalue3=boxes[i[2]].innerHTML;


        if(posvalue1!=""&&posvalue2!=""&&posvalue3!=""){
            if(posvalue1===posvalue2&&posvalue2===posvalue3){
              header.classList.remove("hide");
              disableAllBoxes();
              winner=true;
            }
        }
    }
}


const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};


btn.addEventListener("click",()=>{
    if(!winner){
   boxes.forEach((box)=>{
    text=true;
    box.innerHTML="";
    box.disabled=false;
    header.classList.add("hide");
   });
}
});


btn1.addEventListener("click",()=>{
    boxes.forEach((box)=>{
     text=true;
     box.innerHTML="";
     box.disabled=false;
     header.classList.add("hide");
     winner=false;
 
    });
 });




