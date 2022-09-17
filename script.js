        let homePoint = document.getElementById("hpoint");
let guestPoint = document.getElementById("gpoint");

let homecount=0;
let guestcount=0;
const homeaddone=()=>
{
    homecount+=1;
    homePoint.innerText = homecount;
}
const homeaddtwo=()=>
{
    homecount+=2;
    homePoint.innerText = homecount;
}
const homeaddthree=()=>
{
    homecount+=3;
    homePoint.innerText = homecount;
}
// guest function 
const guestaddone=()=>
{
    guestcount+=1;
    guestPoint.innerText = guestcount;
}
const guestaddtwo=()=>
{
    guestcount+=2;
    guestPoint.innerText = guestcount;
}
const guestaddthree=()=>
{
    guestcount+=3;
    guestPoint.innerText = guestcount;
}
// new game function 
const newgame = ()=>
{
    guestcount = 0;
    homecount = 0;
    homePoint.innerText = 0;
    guestPoint.innerText = 0;
    

}
