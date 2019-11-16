function resize(){

}

$(document).ready(function(){
	resize();
});

$(window).on('load', function () {
	resize();
});

$(window).resize(function(){
	resize();
});
