const body=document.getElementById('body')
const btn1=document.getElementsByClassName('btn1')
const card=document.getElementsByClassName('card')
console.log(card)
let flag=true
function handler(){
    if(flag){
        body.style.backgroundColor='black'
        btn1[0].innerHTML='LIGHT MODE'
        card[0].style.backgroundColor='white'
        card[1].style.backgroundColor='white'
        card[2].style.backgroundColor='white'
    }
    else{
        body.style.backgroundColor='white'
        btn1[0].innerHTML='DARK MODE'
        card[0].style.backgroundColor='blue'
        card[1].style.backgroundColor='blue'
        card[2].style.backgroundColor='blue'
    }
    flag=!flag
}