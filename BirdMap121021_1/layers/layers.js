var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BirdsSeenupdated12102021_1 = new ol.format.GeoJSON();
var features_BirdsSeenupdated12102021_1 = format_BirdsSeenupdated12102021_1.readFeatures(json_BirdsSeenupdated12102021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BirdsSeenupdated12102021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BirdsSeenupdated12102021_1.addFeatures(features_BirdsSeenupdated12102021_1);cluster_BirdsSeenupdated12102021_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BirdsSeenupdated12102021_1
});
var lyr_BirdsSeenupdated12102021_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BirdsSeenupdated12102021_1, 
                style: style_BirdsSeenupdated12102021_1,
                interactive: true,
                title: '<img src="styles/legend/BirdsSeenupdated12102021_1.png" /> Birds Seen (updated 12/10/2021)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BirdsSeenupdated12102021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BirdsSeenupdated12102021_1];
lyr_BirdsSeenupdated12102021_1.set('fieldAliases', {'Id': 'Id', 'Common Name': 'Common Name', 'Scientific Name': 'Scientific Name', 'Location': 'Location', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date': 'Date', 'Time': 'Time', 'Comments': 'Comments', });
lyr_BirdsSeenupdated12102021_1.set('fieldImages', {'Id': 'Range', 'Common Name': 'TextEdit', 'Scientific Name': 'TextEdit', 'Location': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Date': 'DateTime', 'Time': 'DateTime', 'Comments': 'TextEdit', });
lyr_BirdsSeenupdated12102021_1.set('fieldLabels', {'Id': 'no label', 'Common Name': 'inline label', 'Scientific Name': 'header label', 'Location': 'inline label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Date': 'inline label', 'Time': 'inline label', 'Comments': 'no label', });
lyr_BirdsSeenupdated12102021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});