// vanilla
document.addEventListener('DOMContentLoaded', function(){

  const buttons = document.querySelectorAll('.coolBtn');
  Array.from(buttons).forEach(el => {
    el.addEventListener('mouseenter', function(){
      el.classList.add('red');
    });
    el.addEventListener('mouseleave', function(){
      el.classList.remove('red');
    });
  });

  const btnDos = document.getElementById('btnDos');
  btnDos.classList.add('red');

});

// jquery
$(document).ready(function(){

  $('.coolBtn')
  .mouseenter(function(){
    $(this).addClass('green');
  })
  .mouseleave(function(){
    $(this).removeClass('green');
  });

});

// a fake angular example
const clickCallbacks = {
  makeMeYellow: function(event){
    $(event.target).css({backgroundColor: 'yellow'});
  }
};
$('[ng-click]').each(function(){
  const thisElem = $(this);
  const fnName = thisElem.attr('ng-click');
  $(this).click(clickCallbacks[fnName]);
});
