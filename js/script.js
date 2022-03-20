$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-10px", "width": "150px","height":"150px"});

				$("header").css({"background-color": "#000000"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "125px", "width": "400px","height":"400px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});