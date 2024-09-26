{/* <div class="blocks">
<div class="block block--red"></div>
<div class="block block--blue"></div>
<div class="block block--green"></div>
<div class="block block--pink"></div>
<div class="block block--gray"></div>
</div> */}
const rockets = document.querySelectorAll('.block');
const parent = document.querySelector('.blocks');
Array.from(rockets).forEach(item => {
    item.addEventListener('click', launch)
    item.addEventListener('mousedown', goRight)
});

function launch(e){
          parent.prepend(e.target)
}
function goRight(e){
    count = 0;
    
}