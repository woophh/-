const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = '0'
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = '1'
    }
  });
}