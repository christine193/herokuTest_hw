

var target = document.querySelectorAll('.scroll');
//var change = document.getElementById('changed');

function parallax(){

  
if( index = 0 , length = target.length);

for(index; index < length; index ++) { //incramenting lenght
    var position = window.pageYOffset * target [index].dataset.rate;
    
  target[index].style.transform = 'translate3d(0px, '+position+'px , 0px)' ;
  target[index].style.color = '#7fffd4' ;


}


};


window.addEventListener("scroll" , parallax);