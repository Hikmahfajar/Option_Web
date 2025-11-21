var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_option_1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'option_1<br />\
    <img src="styles/legend/option_1_1_0.png" /> 1<br />\
    <img src="styles/legend/option_1_1_1.png" /> 2<br />\
    <img src="styles/legend/option_1_1_2.png" /> 3<br />\
    <img src="styles/legend/option_1_1_3.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/option_1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886600.979594, 802446.730317, 9023863.324140, 943018.690594]
        })
    });
var lyr_option_2_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'option_2<br />\
    <img src="styles/legend/option_2_2_0.png" /> 1<br />\
    <img src="styles/legend/option_2_2_1.png" /> 2<br />\
    <img src="styles/legend/option_2_2_2.png" /> 3<br />\
    <img src="styles/legend/option_2_2_3.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/option_2_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_option_1_1.setVisible(true);lyr_option_2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_option_1_1,lyr_option_2_2];
