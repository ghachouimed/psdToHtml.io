	/*=======Loading========*/
		   var load = document.getElementsByClassName("loading")[0];
window.onload = function(){
	setTimeout(function(){
	load.style.opacity= "0";
	},600);
	setTimeout(function(){
	load.style.display="none";
	}, 600);
}


$(document).ready(function(){

//nice scroll
$("body").niceScroll();

//scroll function
	$(window).scroll(function(){
            if(scrollY>100){
				$('.navbar').css({background:'rgb(8, 8, 8)', height:'60px'});
				$('.navbar a').css({color:'#fff'});
			}else{
				$('.navbar').css('background','transparent');
				$('.navbar a').css({color:'#fff'});
			}
	})

	
	
});