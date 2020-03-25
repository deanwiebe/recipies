//w3schools function for creating the x onclick menu
function myFunction(x) {
    x.classList.toggle("change");
  }


  //jquery ///////////////////////////////////////
  $(document).ready(function(){


      $(".container").click(function(){
        $(".filters").fadeToggle('slow');
      });



  })
  //end jquery///////////////////////////////////////
