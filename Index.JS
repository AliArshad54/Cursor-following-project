"use strict";
const root=document.querySelector('html');
const cursor=document.createElement('div');
cursor.classList.add("cursor");
//console.log(cursor);
root.appendChild(cursor);
const cursorFollower=document.createElement("div");
cursorFollower.classList.add("cursor","cursor_follower");
//console.log(cursorFollower);
root.appendChild(cursorFollower);
root.addEventListener("mousemove",(e)=>{
setPosition(cursorFollower,e);
setPosition(cursor,e);
});
function setPosition(element,e){
        element.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
}
