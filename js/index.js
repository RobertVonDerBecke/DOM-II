// Your code goes here

//click event
const addCSS = function(){
    nav.classList.toggle('on')
}
const nav = document.querySelector('.main-navigation');
nav.addEventListener('click', addCSS)//1

//wheel event
const logo = document.querySelector('h1')
logo.addEventListener('wheel', zoom)//2
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    logo.style.transform = `scale(${scale})`;
  }
  //mouse over
  const byebye = function(e) {
      e.target.style = "display: none;"
  }
  
  const imgs = document.querySelectorAll('img')
  imgs.forEach(img => {
    img.addEventListener('mouseover', byebye)//3
  })

//   keypress
function escKey(e){
      if(e.key === 'Escape'){
          let img = document.querySelectorAll('img');
          Array.from(img).forEach(img => img.style = "display: block;")
      }
  }
document.addEventListener('keydown', escKey)//4
//double click

const background = document.querySelector('.container.home');
 function setBackground(e){
     background.classList.toggle('badBus')
 }
 background.addEventListener('dblclick', setBackground);//5

 //select stuff
const p = document.querySelectorAll('p');
function biggySmalls(e){
    e.target.style = 'font-size: 5rem;'
    e.stopPropagation()
}
function smallsBiggy(e){
    e.target.style = 'font-size: 1rem;'
}
Array.from(p).forEach((item, index, array) => {
    item.addEventListener('mousedown', biggySmalls)//6
    item.addEventListener('mouseover', smallsBiggy)//7
    //really annoying but im learning
})

//mouse move
let info;
function getinfo(e){
    console.log(e.clientX + " " + e.clientY)
}
document.addEventListener('mousemove', getinfo);//8 useless 

//contextual menu
function noMenu(e){
    e.preventDefault();
    alert('You dont get to ride the Bus!');
}
const h2 = document.querySelectorAll('h2');
Array.from(h2).forEach(item => item.addEventListener('contextmenu',noMenu))//9

//yes click but also uses selection ??//10
let button = document.querySelector('button');
button.addEventListener('click', deleteWord);

function deleteWord() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
const links = document.querySelectorAll('.nav-links')
Array.from(links).forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        
    
    })
})