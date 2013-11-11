/* ScrollTo */
$('a[href^="#bloc"]').click(function() {
    var id_anchor = $(this).attr('href');
    $('html,body').animate( {
        scrollTop:$(id_anchor).offset().top
    }, 'slow');
    return false;
});
/* Fin ScrollTo */

/* Leaflet */
var map = L.map('map', {
    center: [48.296592,4.0747349999999996],
    zoom: 16
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([48.296592, 4.0747349999999996]).addTo(map);
marker.bindPopup("<b>Salut !</b><br>On est ici.").openPopup();
/* Fin Leaflet */

/* Facebook wall */
$('#facebook_wall').facebook_wall({
    id: '494973917210316',
    access_token: '108285195955733|nBxyzkey6X69Aors5psTwDTOPPY',
    limit: 10
});
/* Fin Facebook wall */