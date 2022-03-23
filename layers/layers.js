var wms_layers = [];

var format_India_State_Boundary_0 = new ol.format.GeoJSON();
var features_India_State_Boundary_0 = format_India_State_Boundary_0.readFeatures(json_India_State_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_State_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_State_Boundary_0.addFeatures(features_India_State_Boundary_0);
var lyr_India_State_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_State_Boundary_0, 
                style: style_India_State_Boundary_0,
                interactive: true,
    title: 'India_State_Boundary<br />\
    <img src="styles/legend/India_State_Boundary_0_0.png" /> 0.00287852957<br />\
    <img src="styles/legend/India_State_Boundary_0_1.png" /> 0.01112546315<br />\
    <img src="styles/legend/India_State_Boundary_0_2.png" /> 0.04247819042<br />\
    <img src="styles/legend/India_State_Boundary_0_3.png" /> 0.04542442378<br />\
    <img src="styles/legend/India_State_Boundary_0_4.png" /> 0.04823967124<br />\
    <img src="styles/legend/India_State_Boundary_0_5.png" /> 0.13863515216<br />\
    <img src="styles/legend/India_State_Boundary_0_6.png" /> 0.31107512381<br />\
    <img src="styles/legend/India_State_Boundary_0_7.png" /> 0.63048420472<br />\
    <img src="styles/legend/India_State_Boundary_0_8.png" /> 0.65260831487<br />\
    <img src="styles/legend/India_State_Boundary_0_9.png" /> 0.92531809533<br />\
    <img src="styles/legend/India_State_Boundary_0_10.png" /> 1.49743743021<br />\
    <img src="styles/legend/India_State_Boundary_0_11.png" /> 1.86599079505<br />\
    <img src="styles/legend/India_State_Boundary_0_12.png" /> 1.99197112918<br />\
    <img src="styles/legend/India_State_Boundary_0_13.png" /> 2.01426942581<br />\
    <img src="styles/legend/India_State_Boundary_0_14.png" /> 3.11367707193<br />\
    <img src="styles/legend/India_State_Boundary_0_15.png" /> 4.08451829539<br />\
    <img src="styles/legend/India_State_Boundary_0_16.png" /> 4.73601703627<br />\
    <img src="styles/legend/India_State_Boundary_0_17.png" /> 5.02382933383<br />\
    <img src="styles/legend/India_State_Boundary_0_18.png" /> 5.30285976387<br />\
    <img src="styles/legend/India_State_Boundary_0_19.png" /> 7.08429226527<br />\
    <img src="styles/legend/India_State_Boundary_0_20.png" /> 7.09145751890<br />\
    <img src="styles/legend/India_State_Boundary_0_21.png" /> 7.52930142967<br />\
    <img src="styles/legend/India_State_Boundary_0_22.png" /> 7.56039551741<br />\
    <img src="styles/legend/India_State_Boundary_0_23.png" /> 8.47505796855<br />\
    <img src="styles/legend/India_State_Boundary_0_24.png" /> 10.77365528790<br />\
    <img src="styles/legend/India_State_Boundary_0_25.png" /> 11.79008667640<br />\
    <img src="styles/legend/India_State_Boundary_0_26.png" /> 13.47960379180<br />\
    <img src="styles/legend/India_State_Boundary_0_27.png" /> 16.06696495600<br />\
    <img src="styles/legend/India_State_Boundary_0_28.png" /> 16.28291824970<br />\
    <img src="styles/legend/India_State_Boundary_0_29.png" /> 21.85873487110<br />\
    <img src="styles/legend/India_State_Boundary_0_30.png" /> 21.88140017680<br />\
    <img src="styles/legend/India_State_Boundary_0_31.png" /> 23.28129693220<br />\
    <img src="styles/legend/India_State_Boundary_0_32.png" /> 26.44783071510<br />\
    <img src="styles/legend/India_State_Boundary_0_33.png" /> 27.24691826090<br />\
    <img src="styles/legend/India_State_Boundary_0_34.png" /> 30.98640593640<br />\
    <img src="styles/legend/India_State_Boundary_0_35.png" /> <br />'
        });
var format_india_industrial_landuse_polygon_1 = new ol.format.GeoJSON();
var features_india_industrial_landuse_polygon_1 = format_india_industrial_landuse_polygon_1.readFeatures(json_india_industrial_landuse_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_industrial_landuse_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_industrial_landuse_polygon_1.addFeatures(features_india_industrial_landuse_polygon_1);
var lyr_india_industrial_landuse_polygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_india_industrial_landuse_polygon_1, 
                style: style_india_industrial_landuse_polygon_1,
                interactive: true,
                title: '<img src="styles/legend/india_industrial_landuse_polygon_1.png" /> india_industrial_landuse_polygon'
            });

        var lyr_usepaaqi_2 = new ol.layer.Tile({
            'title': 'usepa-aqi',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=tdttejas@gmail.com'
            })
        });

lyr_India_State_Boundary_0.setVisible(true);lyr_india_industrial_landuse_polygon_1.setVisible(true);lyr_usepaaqi_2.setVisible(true);
var layersList = [lyr_India_State_Boundary_0,lyr_india_industrial_landuse_polygon_1,lyr_usepaaqi_2];
lyr_India_State_Boundary_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_india_industrial_landuse_polygon_1.set('fieldAliases', {'gid': 'gid', 'access': 'access', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'addr_inter': 'addr_inter', 'admin_leve': 'admin_leve', 'amenity': 'amenity', 'area': 'area', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'constructi': 'constructi', 'disused': 'disused', 'generator_': 'generator_', 'harbour': 'harbour', 'highway': 'highway', 'historic': 'historic', 'landuse': 'landuse', 'layer': 'layer', 'man_made': 'man_made', 'name': 'name', 'office': 'office', 'operator': 'operator', 'place': 'place', 'power': 'power', 'public_tra': 'public_tra', 'railway': 'railway', 'ref': 'ref', 'service': 'service', 'shop': 'shop', 'surface': 'surface', 'tourism': 'tourism', 'tower_type': 'tower_type', 'waterway': 'waterway', 'z_order': 'z_order', 'way_area': 'way_area', });
lyr_India_State_Boundary_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_india_industrial_landuse_polygon_1.set('fieldImages', {'gid': 'TextEdit', 'access': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_inter': 'TextEdit', 'admin_leve': 'TextEdit', 'amenity': 'TextEdit', 'area': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'constructi': 'TextEdit', 'disused': 'TextEdit', 'generator_': 'TextEdit', 'harbour': 'TextEdit', 'highway': 'TextEdit', 'historic': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'man_made': 'TextEdit', 'name': 'TextEdit', 'office': 'TextEdit', 'operator': 'TextEdit', 'place': 'TextEdit', 'power': 'TextEdit', 'public_tra': 'TextEdit', 'railway': 'TextEdit', 'ref': 'TextEdit', 'service': 'TextEdit', 'shop': 'TextEdit', 'surface': 'TextEdit', 'tourism': 'TextEdit', 'tower_type': 'TextEdit', 'waterway': 'TextEdit', 'z_order': 'Range', 'way_area': 'TextEdit', });
lyr_India_State_Boundary_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_india_industrial_landuse_polygon_1.set('fieldLabels', {'gid': 'no label', 'access': 'no label', 'addr_house': 'no label', 'addr_hou_1': 'no label', 'addr_inter': 'no label', 'admin_leve': 'no label', 'amenity': 'no label', 'area': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'constructi': 'no label', 'disused': 'no label', 'generator_': 'no label', 'harbour': 'no label', 'highway': 'no label', 'historic': 'no label', 'landuse': 'no label', 'layer': 'no label', 'man_made': 'no label', 'name': 'no label', 'office': 'no label', 'operator': 'no label', 'place': 'no label', 'power': 'no label', 'public_tra': 'no label', 'railway': 'no label', 'ref': 'no label', 'service': 'no label', 'shop': 'no label', 'surface': 'no label', 'tourism': 'no label', 'tower_type': 'no label', 'waterway': 'no label', 'z_order': 'no label', 'way_area': 'no label', });
lyr_india_industrial_landuse_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});