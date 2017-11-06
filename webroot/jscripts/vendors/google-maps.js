/*--------------------------------------------------------------------------------------------
 Google Maps Settings
 --------------------------------------------------------------------------------------------*/

var renderGoogleMaps = (function () {

    'use strict';
   
    var makeGoogleMaps = function (options) {

        // validate the options
        if (options.constructor !== Object) {
            console.error('Forneça um objecto com opções.');
            return false;
        } else {
            var properties = [];
            for (var prop in options) {
                properties.push(options[prop]);
            }
            if (properties.length === 0) {
                console.error('Forneça um objecto com opções.');
                return false;
            }
        }

        // google maps remaping
        var google = window.google,
        // map options
        mapCoords = {
            zoom: 16,
            center: {
                lat: options.lat,
                lng: options.lng
            },
            scrollwheel: false
        },
        // marker position
        markerPosition = {
            lat: options.lat,
            lng: options.lng
        },
        // get the element to render the map
        element = document.getElementById(options.element),
        // map
        map = new google.maps.Map(element, mapCoords),
        // object marker
        marker = new google.maps.Marker({
            map: map,
            position: markerPosition,
            icon: '/images/csm_marker.png'
        }),
        // formatted html content
        html = {content: '<h6>' + options.local + '</h6>'},
        // presentation object
        InfoWindow = new google.maps.InfoWindow(html),
        // the mouseover function
        theMouseOverFunction = function (e) {
            InfoWindow.open(map, marker);
        },
        // the mouseout function
        theMouseOutFunction = function (e) {
            InfoWindow.close();
        },
        resizeTheMap = function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center); 
        },
        // eventlistener object
        gMapEvents = google.maps.event.addListener;

        // mouse events
        gMapEvents(marker, 'mouseout', theMouseOutFunction);
        gMapEvents(marker, 'mouseover', theMouseOverFunction);
        google.maps.event.addDomListener(window, 'resize', resizeTheMap);

    };

    return makeGoogleMaps;

})(makeGoogleMaps = window.makeGoogleMaps || {});


