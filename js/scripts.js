var result ;
var park = function (trip, animal){

  if (trip) {
    if (trip ==="ski"){
      if (animal === "panda"){
        return "yellowstone";
      } else if (animal === "giraffe"){
        return "olympic";
      } else if (animal === "kangaroo"){
        return "glacier";
      } else if (animal === "bear"){
        return "glacier"
      }

    } else if (trip ==="beach") {
        if (animal === "panda"){
          return "olympic";
        } else if (animal === "giraffe"){
          return "yellowstone";
        } else if (animal === "kangaroo"){
          return "olympic";
        } else if (animal === "bear"){
          return "glacier"
        }

      } else if (trip === "beach") {
          if (animal === "panda"){
            return "yellowstone";
          } else if (animal === "giraffe"){
            return "olympic";
          } else if (animal === "kangaroo"){
            return "yellowstone";
          } else if (animal === "bear"){
            return "glacier"
          }

        } else if (trip === "backcountry") {
            if (animal === "panda"){
              return "yellowstone";
            } else if (animal === "giraffe"){
              return "yellowstone";
            } else if (animal === "kangaroo"){
              return "glacier";
            } else if (animal === "bear"){
              return "olympic"
            }

      }
    }
  }

  $(document).ready(function(){
  $("form").submit(function(event){

    var trip = $('#trip').val();
    var food = $('#food').val();
    var sport = $('#sport').val();
    var people = $('#people').val();
    var animal = $('#animal').val();
    var result = park(trip, bear);
