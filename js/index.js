// Your code goes here
//1
window.addEventListener('click', function(event) {
    alert('What is up welcome to my page');
  });
//2
  const img2 = document.querySelector('#img2');
img2.addEventListener('contextmenu', function(event){
  event.target.style.border = '2px solid yellow';
});
//3
img2.addEventListener('mouseout', function(event){
  event.target.style.border = 'none';
});
//4
const introImage = document.querySelector('.intro img');
introImage.addEventListener('mouseover', function (event) {
    TweenLite.to(introImage, 2, { width: "200px" });

    introImage.addEventListener('mouseleave', function (event) {

        TweenLite.to(introImage, 2, { width: "100%" });

    });
});

//5
const norefreshing = document.querySelectorAll('.nav');
norefreshing.forEach((navItem, index)=>{
    navItem.addEventListener('click',function(event){
        event.preventDefault();
        console.log('default prevented');
    })
});
//6
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button,idx)=>{
    button.addEventListener('focus',(event)=>{
        button.style.display = 'none';
    })
})
//7
const reSize = window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 500) {
      alert('Mobile Mode!');
    }
  });
//8
  const reSize = window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 500) {
      alert('Mobile Mode!');
    }
  });
  //9
  document.querySelectorAll('img').forEach(element => {
    element.addEventListener('load', (event) => {
        element.style.filter = 'invert(1)';
        element.style.transition = 'filter 1s ease';
    });
    element.addEventListener('click', (event) => {
        element.style.filter = 'unset';
    });
});
//10
document.querySelectorAll('img').forEach(element => {
    element.addEventListener('load', (event) => {
        element.style.filter = 'invert(1)';
        element.style.transition = 'filter 1s ease';
    });
    element.addEventListener('click', (event) => {
        element.style.filter = 'unset';
    });
});