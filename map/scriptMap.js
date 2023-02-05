  //link utilizados para compreensão e desenvolvimento:
            /*
            https://www.w3schools.com/graphics/google_maps_intro.asp
API KEY
            https://developers.google.com/maps/documentation/javascript/get-api-key
ERROS
            https://developers.google.com/maps/documentation/javascript/error-messages?hl=pt-br#invalid-key
RESOLUÇÃO
            https://developers.google.com/maps/get-started?hl=pt-br#create-project
ADM
            https://console.cloud.google.com/welcome?project=testeapi-373118&hl=pt-br
            https://console.cloud.google.com/apis/credentials
            */
    function map() {
        var mapLoc= { lat: -22.786711979339724, lng: -47.13273133094501};
        var mapProp = new google.maps.Map(document.getElementById("googleMap"),{
            zoom: 17,
            center: mapLoc,
            //por padrão, o mapa é o ROADMAP
            //mapTypeId: google.maps.MapTypeId.SATELLITE

            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_LEFT,
            },

            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER,
            },

            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP,
            },

            fullscreenControl: true,
        });

        //marcacao parada (nao pula)
        /*
            var marker = new google.maps.Marker({position: mapLoc});
            marker.setMap(mapProp);
        */
        
        //marcacao animada
        var marker = new google.maps.Marker({
        position:mapLoc,
        animation:google.maps.Animation.BOUNCE
        

        });

        marker.setMap(mapProp);

    }