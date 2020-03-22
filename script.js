function myFunction(x) {
    x.classList.toggle("change");
  }

  $(document).ready(function(){
      $(".container").on("click", function(){
          $(".filters").toggleClass("hide");
      })
  })
