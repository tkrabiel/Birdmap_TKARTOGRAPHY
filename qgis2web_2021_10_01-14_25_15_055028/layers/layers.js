ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3395").setExtent([-8494463.652185, 4392398.268256, -8492101.152185, 4394348.755269]);
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
var format_TAYLORBIRDS_1 = new ol.format.GeoJSON();
var features_TAYLORBIRDS_1 = format_TAYLORBIRDS_1.readFeatures(json_TAYLORBIRDS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_TAYLORBIRDS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAYLORBIRDS_1.addFeatures(features_TAYLORBIRDS_1);cluster_TAYLORBIRDS_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TAYLORBIRDS_1
});
var lyr_TAYLORBIRDS_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TAYLORBIRDS_1, 
                style: style_TAYLORBIRDS_1,
                interactive: true,
                title: '<img src="styles/legend/TAYLORBIRDS_1.png" /> TAYLORBIRDS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TAYLORBIRDS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TAYLORBIRDS_1];
lyr_TAYLORBIRDS_1.set('fieldAliases', {'Id': 'Id', 'Common Name': 'Common Name', 'Scientific Name': 'Scientific Name', 'Location': 'Location', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date': 'Date', 'Time': 'Time', 'Comments': 'Comments', });
lyr_TAYLORBIRDS_1.set('fieldImages', {'Id': 'Range', 'Common Name': 'TextEdit', 'Scientific Name': 'TextEdit', 'Location': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Date': 'DateTime', 'Time': 'DateTime', 'Comments': 'TextEdit', });
lyr_TAYLORBIRDS_1.set('fieldLabels', {'Id': 'no label', 'Common Name': 'header label', 'Scientific Name': 'no label', 'Location': 'no label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Date': 'no label', 'Time': 'no label', 'Comments': 'no label', });
lyr_TAYLORBIRDS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});