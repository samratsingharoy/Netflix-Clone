const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'white';
        body.style.color = 'gold';
        body.style.transition = '2s';
    }
});



// scroll

const toTop=document.querySelector(".to-top");

window.addEventListener ("scroll",() => {
  if (window.pageYOffset>100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




