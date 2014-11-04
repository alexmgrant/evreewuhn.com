	$(document).ready(function(){
		$('#scene').parallax({
			calibrateX: true,
			calibrateY: true,
			invertX: false,
			invertY: true,
			limitX: false,
			limitY: false,
			scalarX: 2,
			scalarY: 2,
			frictionX: 0.2,
			frictionY: 0.2,
			originX: 10.0,
			originY: 21.0
		});
		// var degrees = 120;
	 //    $('.layer').css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
	 //                 '-moz-transform' : 'rotate('+ degrees +'deg)',
	 //                 '-ms-transform' : 'rotate('+ degrees +'deg)',
	 //                 'transform' : 'rotate('+ degrees +'deg)'});
	});