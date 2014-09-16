// shareMicroBlog();

$(function(){
	$(".kaifangzhiwei dl dt").click(maodian);
});
var joinUsId = 0;
function maodian(){
	// alert($(this).index());
	joinUsId = $(this).index();
	if(joinUsId == 1){
		$('html,body').animate({scrollTop: $(".zhengwen4").offset().top});
	}else if(joinUsId == 2){
		$('html,body').animate({scrollTop: $(".zhengwen2").offset().top});
	}else if(joinUsId == 3){
		$('html,body').animate({scrollTop: $(".zhengwen3").offset().top});
	}else if(joinUsId == 4){
		$('html,body').animate({scrollTop: $(".zhengwen1").offset().top});
	}else if(joinUsId == 5){
		$('html,body').animate({scrollTop: $(".zhengwen5").offset().top});
	}
}