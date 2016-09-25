$(document).ready(function() {

  $("submit#button").click(function(event) {
    var sportInput = ($('#sport').val());
    var foodInput = ($('#food').val());
    var weatherInput = ($('#weather').val());
    var flowerInput = ($('#flower').val());
    var houseInput = ($('#house').val());
  })
})

    event.preventDefault();

    if (sportInput) {
      if (sportInput === "tennis") {
      } else if ( sportInput === "Basketball" && foodInput === "Grilled Cheese" ) {
        if (weatherInput === "Rainy") {
          if (flowerInput === "Rose") {
            if (houseInput === "Houseboat") {
              $("#results").addClass(".Olympic");
              $("#results").show();

            } else if (houseInput === "Lakehouse") {
              $("#results").addClass(".Yosemite");
              $("#results").show();

            } else if (houseInput === "Cabin in the Woods" ) {
            $("#results").addClass(".Glacier");
            $("#results").show();

            }

    } else if (weatherInput === "Sunny") {
      if (flowerInput === "Daffodil") {
        if (houseInput === "Cabin in the Woods"){
          $("#results").addClass(".Glacier");
          $("#results").show();
        }
      }
    }
  } else if (weatherInput === 'Winter Wonderland') {
      if (foodInput === 'Grilled Cheese') {
        if (houseInput === "Houseboat") {
          if (flowerInput === "Rose") {
        $("#results").addClass(".Glacier");
        $("#results").show();
      }
    }
  }
      } else if (weatherInput === 'Winter Wonderland') {
        $("#results").addClass(".Yosemite");
        $("#results").show();

      } else if (foodInput === "pizza") {
        $("#results").addClass(".Olympic");
        $("#results").show();
      }


    } else if (flowerInput === 'Sunflower') {
        if (houseInput === 'Lake House') {
          $("#results").addClass(".Yosemite");
          $("#results").show();

        } else if (sportInput === 'basketball') {
          $("#results").addClass(".Olympic");
          $("#results").show();

        } else if (sportInput === 'football') {
          $("#results").addClass(".Glacier");
          $("#results").show();
        }
      }
