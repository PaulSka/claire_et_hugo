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

/* SDK Facebook */
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/* Fin SDK Facebook */
