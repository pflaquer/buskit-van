function showMap(){
var map = null;
var myOptions = {
	
		center: new google.maps.LatLng(40.600, -73.9120),
		zoom: 13,
		scrollwheel: false,
		disableDefaultUI: true,
	};
  map = new google.maps.Map(document.getElementById("map"), myOptions);

}


