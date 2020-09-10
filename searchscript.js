//SEARCH BUTTON ON CLICK AJAX FOR GENIUS 

$("#searchBtn").click(function(){
  var artistName = $("#inputBox").val();
  var queryURL = "https://api.genius.com/search?q="+artistName+"&access_token=Qkx5o7R9EGHd1mf-Xx_jSHirZRR7IliudsMVmNtfCq3cV_vvpVvM9a1UE-2fe1SX";
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
    console.log(response);

    //POPULATES RESULTS BOX WITH ARTIST NAME AND TOP HITS

    var artistName = response.response.hits[0].result.primary_artist.name
    $("#artistName").text(artistName);
    $("#topHits").text("Top 10 Hits");
    var song1 = (response.response.hits[0].result.title_with_featured);
    $("#hit1").text("1. " + song1).attr("href", response.response.hits[0].result.url);
    var song2 = response.response.hits[1].result.title_with_featured
    $("#hit2").text("2. " + song2).attr("href", response.response.hits[1].result.url);
    var song3 = response.response.hits[2].result.title_with_featured
    $("#hit3").text("3. " + song3).attr("href", response.response.hits[2].result.url);
    var song4 = response.response.hits[3].result.title_with_featured
    $("#hit4").text("4. " + song4).attr("href", response.response.hits[3].result.url);
    var song5 = response.response.hits[4].result.title_with_featured
    $("#hit5").text("5. " + song5).attr("href", response.response.hits[4].result.url);
    var song6 = response.response.hits[5].result.title_with_featured
    $("#hit6").text("6. " + song6).attr("href", response.response.hits[5].result.url);
    var song7 = response.response.hits[6].result.title_with_featured
    $("#hit7").text("7. " + song7).attr("href", response.response.hits[6].result.url);
    var song8 = response.response.hits[7].result.title_with_featured
    $("#hit8").text("8. " + song8).attr("href", response.response.hits[7].result.url);
    var song9 = response.response.hits[8].result.title_with_featured
    $("#hit9").text("9. " + song9).attr("href", response.response.hits[8].result.url);
    var song10 = response.response.hits[9].result.title_with_featured
    $("#hit10").text("10. " + song10).attr("href", response.response.hits[9].result.url);

    //POPULATES RESULTS BOX WITH ARTIST PICTURE

    $("#artistImage").empty();
    var artistPic = response.response.hits[0].result.primary_artist.header_image_url;
    var img = $('<img />', { 
        id: 'artistImage',
        src: artistPic,
      });
      img.appendTo($('#artistImage'));
    });

    //POPULATES RESULTS BOX WITH BANDSINTOWN UPCOMING EVENTS API   

    var queryURL2 = "https://rest.bandsintown.com/artists/"+artistName+"/events?app_id=codingbootcamp";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
      console.log(response);
      if (response.length > 0){
        var venue = response[0].venue.name;
        var venueLocation = response[0].venue.location + ", " + response[0].venue.country;
        var venueDate = response[0].datetime;
        venueDate = venueDate.substring(0, response[0].datetime.length - 9);
        var tickets = (response[0].url);
        $("#venueUpcoming").text("Upcoming Events");
        $("#venueDate").text("Date: " + venueDate);
        $("#venueLocation").text("City: " + venueLocation);
        $("#venueName").text("Venue: " + venue);
        $("#venueTickets").text("Purchase your tickets here").attr("href", tickets);
      
      } else if(response.length < 1) {
        console.log("No upcoming events");
        $("#venueUpcoming").text("This Artist has no Upcoming Events");
        $("#venueDate").text("");
        $("#venueLocation").text("");
        $("#venueName").text("");
        $("#venueTickets").text("");
      }
    });
  });
  

