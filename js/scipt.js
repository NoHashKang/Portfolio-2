$(document).ready(function() {
	$('#cursing').typed({
		strings:["Welcome To My Portfolio","Where magic actually exist","Hope you enjoy it all"], 
			typeSpeed: 1,
			backDelay: 3000,
			loop: true,
			loopCount: 500

	});
$('#hide1, #hide2, #hide3, #hide4, #hide5, #hide6').hide();



$('#p1, #p2, #p3, #p4, #p5, #p6').mouseover(function() {
		$(this).stop().animate({
			bottom: '75px'
		}, 'fast');
		
	});

	$("#p1, #p2, #p3, #p4, #p5, #p6").mouseout(function() {
		$(this).stop().animate({
			bottom: '0px'
		}, 'fast');
		
	});


// 	$('#hide1').mouseover(fucntion() {
// 		$('#hide1').show();
// 	});
$('#p1').mouseover(function(){
	$('#hide1').stop().fadeIn();
});

$('#p1').mouseout(function(){
	$('#hide1').stop().fadeOut();
});


$('#p2').mouseover(function(){
	$('#hide2').stop().fadeIn();
});

$('#p2').mouseout(function(){
	$('#hide2').stop().fadeOut();
});

$('#p3').mouseover(function(){
	$('#hide3').stop().fadeIn();
});

$('#p3').mouseout(function(){
	$('#hide3').stop().fadeOut();
});

$('#p4').mouseover(function(){
	$('#hide4').stop().fadeIn();
});

$('#p4').mouseout(function(){
	$('#hide4').stop().fadeOut();
});

$('#p5').mouseover(function(){
	$('#hide5').stop().fadeIn();
});

$('#p5').mouseout(function(){
	$('#hide5').stop().fadeOut();
});

$('#p6').mouseover(function(){
	$('#hide6').stop().fadeIn();
});

$('#p6').mouseout(function(){
	$('#hide6').stop().fadeOut();
});





var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];
    
    $('#color1, #jQuery, #JavaScript').css('color','rgb('+rgb.join(',')+')');
    
}).resize();


$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 500),
        Math.round(e.pageY/h * 500),
        50
    ];
    
    $('#color2').css('color','rgb('+rgb.join(',')+')');
    
}).resize();


$win.resize(getWidth).mousemove(function(e) {
    
    rgb = [
        Math.round(e.pageX/w * 1000),
        Math.round(e.pageY/h * 800),
        200
    ];
    
    $('#color3').css('color','rgb('+rgb.join(',')+')');
    
}).resize();


	$('.penhide').hide()
	$('#pen1').fadeIn('fast')
	$('#pen2').fadeIn(1500)
	$('#pen3').fadeIn(2000)   
	$('#pen4').fadeIn(2500)
	$('#pen5').fadeIn(3000)
	$('#pen6').fadeIn(3500)
		
	});









// var theBall = $('#p1');

// theBall.mouseover(function() {
// 	$(this).animate ({
// 		bottom: '250px'
// 	}, 1500);
// });


	
	// $('#hide1').hide();


	// $('.penhide').hide();



// //Adds toggle of click red on social icons

// // var main =  function() {
// 	$('.activeSoc a').click(function(){
// 		$(this).toggleClass("active");
// 	});	 // body...  
// // };


