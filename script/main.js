$(document).ready(function(){
   

    function hideAll() {
       
		$('.details').hide();
		
    }
    
    hideAll();
	
	
	 $('#gatorWalkIcon').hover(function() {
		 $(this).attr("src", "images/gatorwalk_w.png")
	 }, function (){
		$(this).attr("src", "images/gatorwalk.png")
	});
	
	$('#twoBitsIcon').hover(function() {
		 $(this).attr("src", "images/twobits_w.png")
	 }, function (){
		$(this).attr("src", "images/twobits.png")
	});
	
	$('#hctgIcon').hover(function() {
		 $(this).attr("src", "images/herecomethegators_w.png")
	 }, function (){
		$(this).attr("src", "images/herecomethegators.png")
	});
	
	$('#watbIcon').hover(function() {
		 $(this).attr("src", "images/wearetheboys_w.png")
	 }, function (){
		$(this).attr("src", "images/wearetheboys.png")
	});
	
	$('#gate3Icon').hover(function() {
		 $(this).attr("src", "images/gate3_w.png")
	 }, function (){
		$(this).attr("src", "images/gate3.png")
	});
	
	$('#shakerIcon').hover(function() {
		 $(this).attr("src", "images/shaker_w.png")
	 }, function (){
		$(this).attr("src", "images/shaker.png")
	});
	
	$('#forThreeIcon').hover(function() {
		 $(this).attr("src", "images/forthree_w.png")
	 }, function (){
		$(this).attr("src", "images/forthree.png")
	});
	
	$('#alIcon').hover(function() {
		 $(this).attr("src", "images/al_w.png")
	 }, function (){
		$(this).attr("src", "images/al.png")
	});
	
	$('.song').hover(function() {
		 $(this).css("background", "#fff").css("border-radius", "1.5em")
	 }, function (){
		$(this).css("background", "none");
	});
	
	
	
	
	
	
	
	
    
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
	
	
	
	 
	
	
});
	
