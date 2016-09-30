var park = function(trip, animal){
  if (trip) {
    if (trip ==="ski"){
      if (animal === "panda"){
        return "yellowstone";
      } else if (animal === "giraffe"){
        return "olympic";
      } else if (animal === "kangaroo"){
        return "glacier";
      } else if (animal === "bear"){
        return "glacier";
      }

    } else if (trip ==="beach") {
        if (animal === "panda") {
          return "olympic";
        } else if (animal === "giraffe") {
          return "yellowstone";
        } else if (animal === "kangaroo"){
          return "olympic";
        } else if (animal === "bear"){
          return "glacier";
        }


    } else if (trip === "backcountry") {
        if (animal === "panda"){
            return "yellowstone";
          } else if (animal === "giraffe"){
            return "yellowstone";
          } else if (animal === "kangaroo"){
            return "glacier";
          } else if (animal === "bear"){
              return "olympic";
            }
          }
        }
};

  $(document).ready(function() {
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      var trip = $('select#trip').val();
      var food = $('select#food').val();
      var sport = $('select#sport').val();
      var people = $('select#people').val();
      var animal = $('select#animal').val();
      var result = park(trip, animal);
      console.log(result)



    if (result === "glacier"){
      $("#destination").text(" Glacier National Park!")
      $("#answer").show();
    } else if (result === "olympic") {
        $("#destination").text(" Olympic National Park!")
        $("#answer").show();
    } else if (result === "yellowstone"){
        $("#destination").text(" Yellowstone National Park!")
        $("#answer").show()
    }


    });
  });
