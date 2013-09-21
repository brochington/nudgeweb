(function(global, $, undefined){
    "use strict";

    var mapOptions = {
            zoom: 2,
            mapTypeId: global.google.maps.MapTypeId.ROADMAP
        },
        handleNoGeolocation = function() {
            console.log("geo location is not supported");
        },
        map = new global.google.maps.Map(document.getElementById("map"), mapOptions),
        placeService = new google.maps.places.PlacesService(map),
        searchPlaces = function(){
            var position = global.Nudge.currentLocation,
                request = {
                    location: new global.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    radius: $("#at").val(),
                    keyword: $("#remainderFor").val()
                },
                callback =  function(results, placeStatus) {
                    if (status == global.google.maps.places.PlacesServiceStatus.OK) {
                        var searchResult = [];
                        for (var j = 0; j < results.length; j++) {
                            searchResult.push(results[j]);
                        }
                        global.Nudge.placesResult =  searchResult;
                    }
                };
            placeService.nearbySearch(request, callback);
    };

    global.Nudge.Places = {
        Init : function(){
            $("#nudge-submit").click(function(){
                searchPlaces();
            });
        }
    };

    // use HTML5 geo-location to identify the user current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            global.Nudge.currentLocation = position;
        }, function() {
            handleNoGeolocation();
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation();
    }

})(this, jQuery);
