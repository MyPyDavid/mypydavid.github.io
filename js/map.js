$(document).ready(function() {
    var map = L.map('map');
    map.setView([51.165, 10.455278], 5);

    L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> | Contributors <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | Tiles © <a href="http://cartodb.com/attributions">CartoDB</a>',
        'minZoom': 0,
        'maxZoom': 10
    }).addTo(map);

    var source   = document.getElementById('marker-template').innerHTML;
    var template = Handlebars.compile(source);

    var greenIcon = new L.Icon({
       iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
       iconSize: [25, 41],
       iconAnchor: [12, 41],
       popupAnchor: [1, -34],
       shadowSize: [41, 41]
    });

    var blueIcon = new L.Icon({
       iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
       iconSize: [25, 41],
       iconAnchor: [12, 41],
       popupAnchor: [1, -34],
       shadowSize: [41, 41]
    });

    var greyIcon = new L.Icon({
       iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
       iconSize: [25, 41],
       iconAnchor: [12, 41],
       popupAnchor: [1, -34],
       shadowSize: [41, 41]
    });
    $.each(_locations, function (key, location) {
        var html = template(location);
	var decide = location.col;
	if (decide == 'green'){
        	var marker = L.marker([location.lon, location.lat], {icon: greenIcon}).addTo(map);
	}
	else if (decide == 'blue'){
		var marker = L.marker([location.lon, location.lat], {icon: blueIcon}).addTo(map);
	}
	else{
		var marker = L.marker([location.lon, location.lat], {icon:greyIcon}).addTo(map);
	}
        marker.bindPopup(html);
    });
});
