

function choice(id){

let lefthand=document.getElementById("lefthand");


let element=document.createElement("div");
    element.classList="leftside";
    element.classList="button";
    element.id=id;
    lefthand.appendChild(element);
    start(element.id);

}


function start(leftid){

   let a= Math.floor(Math.random() * (2 - 0 + 1) + 1) ;
   let righthand=document.getElementById("righthand");
   let pc=document.createElement("div");

   if(a==1){
    
    pc.classList="rightside";
    pc.classList="button";
    pc.id="rock";
    righthand.appendChild(pc);
 }else if(a==2){
    
    pc.classList="rightside";
    pc.classList="button";
    pc.id="paper";
    righthand.appendChild(pc);
 }else{
    
    pc.classList="rightside";
    pc.classList="button";
    pc.id="scissors";
    righthand.appendChild(pc);
 }
 choosewinner(leftid,pc.id);

}


function choosewinner(leftid,rightid){
 
    


if(leftid===rightid){
    document.getElementById("answer").innerHTML="Tie 😷 "; 
    document.getElementById("body").classList.remove("bg");
}else if(leftid=="rock" && rightid=="scissors"){
    document.getElementById("answer").innerHTML="You win 👍 ";
    document.getElementById("body").classList="bg";
}else if(leftid=="scissors" && rightid=="paper"){
    document.getElementById("answer").innerHTML="You win👍 ";
    document.getElementById("body").classList="bg";
}else if(leftid=="paper" && rightid=="rock"){ 
    document.getElementById("answer").innerHTML="You win 👍 ";
    document.getElementById("body").classList="bg";
}else{
    document.getElementById("answer").innerHTML="You loose 👎"; 
    document.getElementById("body").classList.remove("bg");
}

let reload=setInterval(function(){
    location.reload();
},2000);

}