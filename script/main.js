$(document).ready(function(){
   

    function hideAll() {
       
		$('.details').hide();
		$('.detailsM').hide();
		$('.detailsSong').hide();
		
    }
    
    hideAll();
	
	
	 $('#gatorWalkIcon').hover(function() {
		 $(this).attr("src", "images/icons/gatorwalk_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/gatorwalk.png")
	});
	
	$('#twoBitsIcon').hover(function() {
		 $(this).attr("src", "images/icons/twobits_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/twobits.png")
	});
	
	$('#hctgIcon').hover(function() {
		 $(this).attr("src", "images/icons/herecomethegators_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/herecomethegators.png")
	});
	
	$('#watbIcon').hover(function() {
		 $(this).attr("src", "images/icons/wearetheboys_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/wearetheboys.png")
	});
	
	$('#gate3Icon').hover(function() {
		 $(this).attr("src", "images/icons/gate3_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/gate3.png")
	});
	
	$('#shakerIcon').hover(function() {
		 $(this).attr("src", "images/icons/shaker_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/shaker.png")
	});
	
	$('#forThreeIcon').hover(function() {
		 $(this).attr("src", "images/icons/forthree_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/forthree.png")
	});
	
	$('#alIcon').hover(function() {
		 $(this).attr("src", "images/icons/al_w.png")
	 }, function (){
		$(this).attr("src", "images/icons/al.png")
	});
	
	$('.song').hover(function() {
		 $(this).css("background", "#fff").css("border-radius", "1.5em")
	 }, function (){
		$(this).css("background", "none");
	});
	
	
	
	
var windowSize = $(window).width();

	if (windowSize <= 376) {
		
		$('.icon').click (function() {

				hideAll();
						
				switch ( $(this).attr("id") ) {
					
					case "gatorWalkIcon" :
						
						
						$('#gatorWalkDetailsM').slideToggle();
						
						
						break;
					case "twoBitsIcon" :
						
						$('#twoBitsDetailsM').slideToggle();
						
						break;
					case "hctgIcon" :
						
						$('#hctgDetailsM').slideToggle();
						
						break;
						
					case "watbIcon" :
						
						$('#watbDetailsM').slideToggle();
						
						break;
						
					/* Basketball */	
						
					case "gate3Icon" :
						
						$('#gate3DetailsM').slideToggle();
						
						break;
						
					case "shakerIcon" :
						
						$('#shakerDetailsM').slideToggle();
						
						break;	
						
					case "forThreeIcon" :
						
						$('#forThreeDetailsM').slideToggle();
						
						break;
						
					case "alIcon" :
						
						$('#alDetailsM').slideToggle();
						
						break;	
						
					/* Songs */	
					
					case "fightSongIcon" :
						
						$('#fightSongDetails').slideToggle();
						
						break;
						
					case "almaMaterIcon" :
						
						$('#almaMaterDetails').slideToggle();
						
						break;
						
					case "watbSongIcon" :
						
						$('#watbSongDetails').slideToggle();
						
						break;
						
					case "callMeAlIcon" :

						$('#callMeAlDetails').slideToggle();
					
						break;
				}
		});
		
	}
	else {
			
			$('.icon').click (function() {

				hideAll();
						
				switch ( $(this).attr("id") ) {
					
					/*
					case "icon id" :
						
						$('#details id').slideToggle();
						
						break; */
						
					/* Football */
					
					case "gatorWalkIcon" :
						
						
						$('#gatorWalkDetails').slideToggle();
						
						
						break;
					case "twoBitsIcon" :
						
						$('#twoBitsDetails').slideToggle();
						
						break;
					case "hctgIcon" :
						
						$('#hctgDetails').slideToggle();
						
						break;
						
					case "watbIcon" :
						
						$('#watbDetails').slideToggle();
						
						break;
						
					/* Basketball */	
						
					case "gate3Icon" :
						
						$('#gate3Details').slideToggle();
						
						break;
						
					case "shakerIcon" :
						
						$('#shakerDetails').slideToggle();
						
						break;	
						
					case "forThreeIcon" :
						
						$('#forThreeDetails').slideToggle();
						
						break;
						
					case "alIcon" :
						
						$('#alDetails').slideToggle();
						
						break;	
						
					/* Songs */	
					
					case "fightSongIcon" :
						
						$('#fightSongDetails').slideToggle();
						
						break;
						
					case "almaMaterIcon" :
						
						$('#almaMaterDetails').slideToggle();
						
						break;
					case "watbSongIcon" :
						
						$('#watbSongDetails').slideToggle();
						
						break;
					case "callMeAlIcon" :

						$('#callMeAlDetails').slideToggle();
					
						break;
					
				}
				
			});  
		}
	
	
	 
	
	
});
	
