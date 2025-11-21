var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_LocationbasedPriorityInterventionOption_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Location-based Priority Intervention Option
<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_0.png" /> Streamside protection <br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_1.png" /> Drainage management along roads<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_2.png" /> Rehabilitation and establishment of village tanks, ponds and irrigation networks<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_3.png" /> Restoration of forest mosaic landscapes<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_4.png" /> Increasing cropping intensity of irrigated rice in both upstream and downstream areas<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_5.png" /> Sustainable intensification of smallholder production<br />\
    <img src="styles/legend/LocationbasedPriorityInterventionOption_1_6.png" /> Restoration and sustainable intensification of plantations<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LocationbasedPriorityInterventionOption_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886826.912811, 802481.207363, 9024091.433598, 943056.012452]
        })
    });
var lyr_Restorationandsustainableintensificationofplantations_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Restoration and sustainable intensification of plantations<br />\
    <img src="styles/legend/Restorationandsustainableintensificationofplantations_2_0.png" /> No Priority<br />\
    <img src="styles/legend/Restorationandsustainableintensificationofplantations_2_1.png" /> Low Priority<br />\
    <img src="styles/legend/Restorationandsustainableintensificationofplantations_2_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Restorationandsustainableintensificationofplantations_2_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Restorationandsustainableintensificationofplantations_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Sustainableintensificationofsmallholderproduction_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sustainable intensification of smallholder production<br />\
    <img src="styles/legend/Sustainableintensificationofsmallholderproduction_3_0.png" /> No Priority<br />\
    <img src="styles/legend/Sustainableintensificationofsmallholderproduction_3_1.png" /> Low Priority<br />\
    <img src="styles/legend/Sustainableintensificationofsmallholderproduction_3_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Sustainableintensificationofsmallholderproduction_3_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sustainableintensificationofsmallholderproduction_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Increasing cropping intensity of irrigated rice in both upstream and downstream areas<br />\
    <img src="styles/legend/Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4_0.png" /> No Priority<br />\
    <img src="styles/legend/Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4_1.png" /> Low Priority<br />\
    <img src="styles/legend/Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Restorationofforestmosaiclandscapes_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Restoration of forest mosaic landscapes<br />\
    <img src="styles/legend/Restorationofforestmosaiclandscapes_5_0.png" /> No Priority<br />\
    <img src="styles/legend/Restorationofforestmosaiclandscapes_5_1.png" /> Low Priority<br />\
    <img src="styles/legend/Restorationofforestmosaiclandscapes_5_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Restorationofforestmosaiclandscapes_5_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Restorationofforestmosaiclandscapes_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rehabilitation and establishment of village tanks, ponds and irrigation networks<br />\
    <img src="styles/legend/Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6_0.png" /> No Priority<br />\
    <img src="styles/legend/Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6_1.png" /> Low Priority<br />\
    <img src="styles/legend/Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Drainagemanagementalongroads_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Drainage management along roads<br />\
    <img src="styles/legend/Drainagemanagementalongroads_7_0.png" /> No Priority<br />\
    <img src="styles/legend/Drainagemanagementalongroads_7_1.png" /> Low Priority<br />\
    <img src="styles/legend/Drainagemanagementalongroads_7_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Drainagemanagementalongroads_7_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Drainagemanagementalongroads_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886604.347207, 802444.290860, 9023866.684476, 943016.236576]
        })
    });
var lyr_Streamsideprotection_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Streamside protection <br />\
    <img src="styles/legend/Streamsideprotection_8_0.png" /> No Priority<br />\
    <img src="styles/legend/Streamsideprotection_8_1.png" /> Low Priority<br />\
    <img src="styles/legend/Streamsideprotection_8_2.png" /> Medium Priority<br />\
    <img src="styles/legend/Streamsideprotection_8_3.png" /> High Priority<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Streamsideprotection_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8886600.979594, 802446.730317, 9023863.324140, 943018.690594]
        })
    });
var format_ProjectBoundary_9 = new ol.format.GeoJSON();
var features_ProjectBoundary_9 = format_ProjectBoundary_9.readFeatures(json_ProjectBoundary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectBoundary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectBoundary_9.addFeatures(features_ProjectBoundary_9);
var lyr_ProjectBoundary_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectBoundary_9, 
                style: style_ProjectBoundary_9,
                popuplayertitle: 'Project Boundary',
                interactive: true,
                title: '<img src="styles/legend/ProjectBoundary_9.png" /> Project Boundary'
            });
var group_Boundary = new ol.layer.Group({
                                layers: [lyr_ProjectBoundary_9,],
                                fold: 'open',
                                title: 'Boundary '});
var group_SevenInterventionOptionsidentified = new ol.layer.Group({
                                layers: [lyr_Restorationandsustainableintensificationofplantations_2,lyr_Sustainableintensificationofsmallholderproduction_3,lyr_Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4,lyr_Restorationofforestmosaiclandscapes_5,lyr_Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6,lyr_Drainagemanagementalongroads_7,lyr_Streamsideprotection_8,],
                                fold: 'open',
                                title: 'Seven Intervention Options identified '});

lyr_OpenStreetMap_0.setVisible(true);lyr_LocationbasedPriorityInterventionOption_1.setVisible(true);lyr_Restorationandsustainableintensificationofplantations_2.setVisible(true);lyr_Sustainableintensificationofsmallholderproduction_3.setVisible(true);lyr_Increasingcroppingintensityofirrigatedriceinbothupstreamanddownstreamareas_4.setVisible(true);lyr_Restorationofforestmosaiclandscapes_5.setVisible(true);lyr_Rehabilitationandestablishmentofvillagetankspondsandirrigationnetworks_6.setVisible(true);lyr_Drainagemanagementalongroads_7.setVisible(true);lyr_Streamsideprotection_8.setVisible(true);lyr_ProjectBoundary_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LocationbasedPriorityInterventionOption_1,group_SevenInterventionOptionsidentified,group_Boundary];
lyr_ProjectBoundary_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIDT_1': 'SIDT_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ProjectBoundary_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'SIDT_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ProjectBoundary_9.set('fieldLabels', {'OBJECTID': 'no label', 'SIDT_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ProjectBoundary_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});