var wms_layers = [];

var format_Mpos_Purepechas_0 = new ol.format.GeoJSON();
var features_Mpos_Purepechas_0 = format_Mpos_Purepechas_0.readFeatures(json_Mpos_Purepechas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mpos_Purepechas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mpos_Purepechas_0.addFeatures(features_Mpos_Purepechas_0);
var lyr_Mpos_Purepechas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mpos_Purepechas_0, 
                style: style_Mpos_Purepechas_0,
                popuplayertitle: 'Mpos_Purepechas',
                interactive: true,
                title: '<img src="styles/legend/Mpos_Purepechas_0.png" /> Mpos_Purepechas'
            });
var format_00ent_1 = new ol.format.GeoJSON();
var features_00ent_1 = format_00ent_1.readFeatures(json_00ent_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_00ent_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_00ent_1.addFeatures(features_00ent_1);
var lyr_00ent_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_00ent_1, 
                style: style_00ent_1,
                popuplayertitle: '00ent',
                interactive: true,
                title: '<img src="styles/legend/00ent_1.png" /> 00ent'
            });
var format_Regionpueblopurepecha_2 = new ol.format.GeoJSON();
var features_Regionpueblopurepecha_2 = format_Regionpueblopurepecha_2.readFeatures(json_Regionpueblopurepecha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionpueblopurepecha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionpueblopurepecha_2.addFeatures(features_Regionpueblopurepecha_2);
var lyr_Regionpueblopurepecha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionpueblopurepecha_2, 
                style: style_Regionpueblopurepecha_2,
                popuplayertitle: 'Region pueblo purepecha',
                interactive: true,
                title: '<img src="styles/legend/Regionpueblopurepecha_2.png" /> Region pueblo purepecha'
            });

lyr_Mpos_Purepechas_0.setVisible(true);lyr_00ent_1.setVisible(true);lyr_Regionpueblopurepecha_2.setVisible(true);
var layersList = [lyr_Mpos_Purepechas_0,lyr_00ent_1,lyr_Regionpueblopurepecha_2];
lyr_Mpos_Purepechas_0.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'layer': 'layer', 'path': 'path', });
lyr_00ent_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_Regionpueblopurepecha_2.set('fieldAliases', {'Pueblo': 'Pueblo', 'Comunidad': 'Comunidad', 'Entidad': 'Entidad', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Mpos_Purepechas_0.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_00ent_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Regionpueblopurepecha_2.set('fieldImages', {'Pueblo': 'TextEdit', 'Comunidad': 'TextEdit', 'Entidad': 'TextEdit', 'Municipio': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Mpos_Purepechas_0.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_00ent_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_Regionpueblopurepecha_2.set('fieldLabels', {'Pueblo': 'no label', 'Comunidad': 'no label', 'Entidad': 'no label', 'Municipio': 'no label', 'Localidad': 'no label', 'Ubicación': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_Regionpueblopurepecha_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});