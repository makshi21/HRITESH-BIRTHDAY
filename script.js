function openSurprise(){

window.location.href="surprise.html";

}



// Red floating hearts

for(let i=0;i<40;i++){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=
(Math.random()*3+4)+"s";


heart.style.fontSize=
(Math.random()*20+15)+"px";


document.body.appendChild(heart);


}