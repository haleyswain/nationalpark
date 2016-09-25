$(document).ready(function() {
$("form").submit(function(){
  event.preventDefault();
  $("submit#button").click(function(event) {
    var sport = ($('#sport').val());
    var food = ($('#food').val());
    var weather = ($('#weather').val());
    var flower = ($('#flower').val());
    var house = ($('#house').val());
    var answer;

    if (sport === "Tennis") {
      if (food === "Grilled Cheese") {
        if (weather === "Rainy") {
          if (flower === "Rose") {
            if (house === "Houseboat") {
            answer = "Olympic";
          } else if (sport === "Tennis"){
            if (food === "Pizza") {
              if (weather === "Rainy") {
                if (flower === "Rose") {
                  if (house === "Houseboat") {
                  answer = "Olympic";
                } else if (sport === "Tennis") {
                  if (food === "Cheeseburger") {
                    if (weather === "Rainy") {
                      if (flower === "Rose") {
                        if (house === "Houseboat") {
                        answer = "Olympic";
                      }
                    }
                    }
                  }
                }
              }
              }
            }
          }
        }
      }
    }
  }

    $("#output").text(answer);
  });
});
});
