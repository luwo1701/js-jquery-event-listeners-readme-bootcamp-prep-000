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
  $('input#typing').on('submit',function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $('input#typing').on('keydown',function(e){
    if(e.key == "G"){
      alert("You pressed G ya dingus")
    }
  })
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submitIt()
  pressIt()
});

