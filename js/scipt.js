$(document).ready(function() {
	$('#cursing').typed({
		strings:["Welcome To My Portfolio","Not sure what to say next","Hope you enjoy it all"], 
			typeSpeed: 1,
			backDelay: 3000,
			loop: true,
			loopCount: 500

	});


$('.penhide').mouseover(function() {
		$(this).stop().animate({
			bottom: '75px'
		}, 'fast', 'easeOutBounce');
	});

	$("#p1, #p2, #p3, #p4").mouseout(function() {
		$(this).stop().animate({
			bottom: '0px'
		}, 'fast', 'easeOutBounce');
	});
});







// var theBall = $('#p1');

// theBall.mouseover(function() {
// 	$(this).animate ({
// 		bottom: '250px'
// 	}, 1500);
// });


	
	// $('#hide1').hide();


	// $('.penhide').hide();
	// $('#pen1').fadeIn();
	// .animate({
	// 	top: '275px'
	// }, 5000);
	// $('.penhide').hide()
	// $('#pen1').fadeIn('fast')
	// $('#pen2').fadeIn(1500)
	// $('#pen3').fadeIn(2000)   I cannot seem to get easeOnBounce to work, when I remove it the code works and images raise on mouseover.. Any help appreciated
	// $('#pen4').fadeIn(2500)
	// $('#pen5').fadeIn(3000)
	// $('#pen6').fadeIn(3500)
		
	

// //Adds toggle of click red on social icons

// // var main =  function() {
// 	$('.activeSoc a').click(function(){
// 		$(this).toggleClass("active");
// 	});	 // body...  
// // };


