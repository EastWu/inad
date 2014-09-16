// shareMicroBlog();

var shear_platform = "";
$(function(){
	$("#footer_shear_btns li").click(shearEvent);
	$("#header_shear li").click(shearEvent);
});
function shearEvent(){
	if($(this).index() == 0){
		return;
	}else if($(this).index() == 1){
		shear_platform = "douban";
	}else if($(this).index() == 2){
		shear_platform = "sina";
	}else {
		shear_platform = "renren";
	}

	shareMicroBlog(shear_platform,shareText,shareUrl,sharePic,shareTitle);
};