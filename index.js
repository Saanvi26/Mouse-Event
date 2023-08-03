const containerELement=document.querySelector(".container");
window.addEventListener("mousemove",(event)=>{
    containerELement.innerHTML= `<div class="mouse-event">
    ${event.clientX}
    <h4>Mouse-X position (in px)</h4>
</div>
  <div class="mouse-event">
    ${event.clientY}
    <h4>Mouse-Y position (in px)</h4>
</div>`
})