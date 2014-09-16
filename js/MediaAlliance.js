var i = 0;
var pcId = 0;
var mobileId = 0;
var showId = 1;



$(function(){
	$("#info1_pc li").click(pcBtnCLick);
	$("#info1_mobile li").click(mobileBtnCLick);

	$("#ContactUs").click(showInput);
	$("#inputClose").click(heidInput);
	$("#inputBtn").click(submit);

	if(getRequest() && getRequest().showId){
		showId = getRequest().showId;
	}
	
	setTimeout(function(){
		jQuery(".leftLoop").slide({ mainCell:".bd ul",effect:"leftLoop",vis:1,scroll:1,autoPlay:false})//开启插件功能
		
		showContent(showId);

	},100);
});

function showInput(){
	$("#input").css("display","block");
}
function heidInput(){
	$("#input").css("display","none");
}
function submit(){
	
}

function pcBtnCLick(){
	pcId = $(this).index();
	if(pcId == 0){
		showId = 1;
	}else if(pcId == 1){
		showId = 2;
	}else if(pcId == 2){
		showId = 5;
	}else {
		// showId = 1;
		alert("敬请期待!");
	}
	showContent(showId);
}

function mobileBtnCLick(){
	mobileId = $(this).index();
	if(mobileId == 0){
		showId = 1;
	}else if(mobileId == 1){
		showId = 1;
	}else if(mobileId == 4){
		showId = 2;
	}else if(mobileId == 5){
		showId = 4;
	}else if(mobileId == 6){
		showId = 5;
	}else if(mobileId == 2){
		showId = 3;
	}else{
		alert("敬请期待!");
	}
	showContent(showId);
}
function showContent(_shouId){
	for(i = 0; i < 5; i++){
		$("#content"+(i+1)).css("display","none");
	}
	$("#content"+_shouId).css("display","block");
}