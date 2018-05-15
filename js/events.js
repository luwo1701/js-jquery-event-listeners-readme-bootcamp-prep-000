//define functions here
function getIt(){
  $('p').on('click',function(){
    alert("HEY!")
  })
}
function frameIt(){
  $(window).on('load',function(){
    $('img').addClass('tasty')
  })
}

function submitIt(){
  $('#typing').on('submit',function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $(document).on('key')
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});

