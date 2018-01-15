
        // Creating the map layer with the stamen source 
        var stamenlayer = new ol.layer.Tile({
            //specifying the source here
            source: new ol.source.Stamen({
                //setting the layer type within the Stamen layer source
                layer : 'toner'
            })
        });

         // Creating the map layer with the OSM (Open Street Map) source 
        var osmlayer = new ol.layer.Tile({
            //specifying the source here
            source: new ol.source.OSM()
        });

        //Creating the control for the map that are not there by Deefault
        var control = new ol.control.FullScreen();

        // Setting the lat long and converting them to the default projection

        var latlong = ol.proj.transform([74.3587, 31.5204], 'EPSG:4326', 'EPSG:3857');   

        /* Setting EPSG 4326 for the WGS84; EPSG 4326 is the identifier for the WGS84 (latitude and longitude coordinates on the WGS84 reference ellipsoid).
        Setting EPSG 3857 for the Geographic; EPSG 3857 is the identifier for the Geographic Coordinate System.
        EPSG: European Petroleum Survey Group
        in defining latitide longitude we first define longitude than latitude */

        //Setting the view for the map 
        //Specifying center and the zoom level initially

        var view = new ol.View({
            center: latlong,
            zoom: 6
        });

        //intenciating the map object with target element, coustom controls and assigning layers, zoom and projection transformation to the map
        var map = new ol.Map({
            target : 'map',
            layers : [osmlayer, stamenlayer],
            controls : [control],
            view: view
        });

        //Creating the functions for changeing the visibility of layers
        //function for changing visibility of OSM layer on click event
        $("#osmVisiblity").click(function osmLayerVisibility(){
            osmlayer.setVisible(this.checked);
        });

        //function for changing visibility of steman layer on click event
        $("#stemanVisiblity").click(function stamenLayerVisibility(){
            stamenlayer.setVisible(this.checked);
        });

        // Creating the function for changing the opacity of the layers
        // function for changing the opacity of the OSM layer
        $('#osmOpacity').on('input change', function osmOpacity(){
            osmlayer.setOpacity(parseFloat(this.value));
        });

        // function for changing the opacity of the stamen layer
        $('#stemanOpacity').on('input change',function osmOpacity(){
            stamenlayer.setOpacity(parseFloat(this.value));
        });

        //  var opacityInput = $('#opacity1');
        // opacityInput.on('input change', function() {
        //   stamenLayer.setOpacity(parseFloat(this.value));
        // });
