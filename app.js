
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('.skill').forEach(bar=>{
     setTimeout(()=>{ bar.style.width = bar.getAttribute('data-level'); },500);
  });
});
function toggleTheme(){
   document.body.classList.toggle("dark");
}
