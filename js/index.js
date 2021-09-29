// Your code goes here
const events = [
    `mouseover`,
   `keydown`,
  `wheel`,
   `load`,
   `focus`,
   `resize`,
   `scroll`,
   `select`,
   `dblclick`
   
]
//click event
const addCSS = function(){
    nav.classList.toggle('on')
}
const nav = document.querySelector('.main-navigation');
nav.addEventListener('click', addCSS)

//wheel event
const bus = document.querySelector('.main-navigation')
bus.addEventListener('wheel', zoom)
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    bus.style.transform = `scale(${scale})`;
  }
  //mouse over
  let noDisplay = false;
  const byebye = function(e) {
      e.target.style = "display: none;"
      noDisplay = true;
  }
  
  const imgs = document.querySelectorAll('img')
  imgs.forEach(img => {
    img.addEventListener('mouseover', byebye)
  })

//   keypress
function escKey(e){
      if(e.key === 'Escape'){
          let img = document.querySelectorAll('img');
          Array.from(img).forEach(img => img.style = "display: block;")
      }
  }
document.addEventListener('keydown', escKey)
//mouse out



