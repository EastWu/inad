
var infp3Pics = ["img/home/info3_pic1.jpg","img/home/info3_pic2.jpg","img/home/info3_pic3.jpg","img/home/info3_pic4.jpg"];
var infp3Titles = ["兴趣化设计，让用户第一眼“看上”广告","兴趣化互动，品牌和用户玩在一起","原生广告，让沟通方式更友好","在对的时间，对的地点，和你不期而遇"];
var infp3Txts = [
"兴趣化设计，将品牌诉求与用户兴趣紧密联系，以用户喜欢的语言、个性化视觉进行广告素材的创意设计，质感、前沿、亲切的设计理念，以及极具趣味的文案内容，使得网友喜爱浏览、点击品牌广告，使广告“有趣且有效”。",
"通过用户洞察，捆绑热点、用户兴趣，针对品牌、产品特性定制互动活动，通过征集原创内容，定制趣味游戏，虚拟产品体验等方式，实现品牌和用户的深度沟通，产出优质口碑，在社交平台上引发人际传播，让品牌和用户真正的“玩”在一起。",
"兴趣化素材设计、定制化互动体验、深度结合产品内容，原生广告不仅是一种广告形式，更是一种营销理念，源于对媒体、平台产品自身特色的尊重，对用户体验的保护，使沟通变得更友好，使广告内容成为媒体、平台有价值内容的一部分。",
"致趣联合时下最具个性、品质、影响力的艺术展览、音乐演出、时尚运动、沙龙等主办方，共同为品牌定制线下的深度沟通，将线上影响力延伸至线下，使用户在对的时间，对的地点，与品牌零距离接触。"
];

var i = 0;

$(function(){
	$("#info1_pc li").click(pcBtnCLick);
	$("#info1_mobile li").click(mobileBtnCLick);

	$(".picList li").mouseover(info2BtnsOver);
	$(".picList li").mouseout(info2BtnsOut);
	$(".picList li").click(info2BtnsClick);

	$("#info3_btns li").mouseover(info3BtnsOver);
	$("#info3_btns li").mouseout(info3BtnsOut);
	$("#info3_btns li").click(info3BtnsClick);


});
var MediaAllianceId = 1;
function pcBtnCLick(){
	pcId = $(this).index();
	if($(this).index() == 0){
		MediaAllianceId = 1;
	}else if($(this).index() == 1){
		MediaAllianceId = 2;
	}else if($(this).index() == 2){
		MediaAllianceId = 5;
	}else {
		MediaAllianceId = 1;
	}
	//alert(MediaAllianceId);
	window.location.href="MediaAlliance.html?showId="+MediaAllianceId; 
}
function mobileBtnCLick(){
	if($(this).index() == 0){
		MediaAllianceId = 1;
	}else if($(this).index() == 1){
		MediaAllianceId = 1;
	}else if($(this).index() == 4){
		MediaAllianceId = 2;
	}else if($(this).index() == 5){
		MediaAllianceId = 4;
	}else if($(this).index() == 6){
		MediaAllianceId = 5;
	}else if($(this).index() == 2){
		MediaAllianceId = 3;
	}
	//alert(MediaAllianceId);
	window.location.href="MediaAlliance.html?showId="+MediaAllianceId; 
}


var info2Id = 0;
function info2BtnsOver(){
	TweenLite.to($(this).children("div").children("div"), .3, {css:{display:"block",opacity:1}, ease:Cubic.easeOut});
}
function info2BtnsOut(){
	TweenLite.to($(this).children("div").children("div"), .3, {css:{display:"none",opacity:0}, ease:Cubic.easeOut});
}
function info2BtnsClick(){
	// alert($(this).index());
	info2Id = $(this).children("div").attr("ast");
	$("#info2Content").css("display","block");
	$("#info2Content").empty();
	$("#info2Content").append("<img id='contentClose' src='img/MediaAlliance/inputClose.gif'>");
	$("#info2Content").append("<h1>" + DoDatas[info2Id].title + "</h1>");
	$("#info2Content").append("<div class='leftLoop3'></div>");
	$(".leftLoop3").append("<div class='hd'><a class='next'></a><a class='prev'></a></div>");
	$(".leftLoop3").append("<div class='bd'></div>");
	$(".leftLoop3 .bd").append("<ul class='picList3'></ul>");
	for(i = 0; i < DoDatas[info2Id].num; i++){
		$(".leftLoop3 .bd .picList3").append("<li><div class='pic'><img src=" + DoDatas[info2Id].pic[i] + " /></div><div class='txt'><h2>" + DoDatas[info2Id].topic[i] + "</h2><p>" + DoDatas[info2Id].txt[i] + "</p></div></li>");
	}

	setTimeout(function(){
		jQuery(".leftLoop3").slide({ mainCell:".bd ul",effect:"leftLoop",vis:1,scroll:1,autoPlay:false});
	},9);

	TweenLite.to($("#info2Content"), .3, {delay:.1,css:{display:"block",opacity:1}, ease:Expo.easeOut});
	$("#info2Content #contentClose").click(info2ContentClose);
}
function info2ContentClose(){
	TweenLite.to($("#info2Content"), .3, {css:{display:"none",opacity:0}, ease:Expo.easeOut});
}

var info3Id = 0;
function info3BtnsOver(){
	TweenLite.to($(this).children("div"), .3, {css:{display:"block",opacity:1}, ease:Cubic.easeOut});
}
function info3BtnsOut(){
	TweenLite.to($(this).children("div"), .3, {css:{display:"none",opacity:0}, ease:Cubic.easeOut});
}
function info3BtnsClick(){
	info3Id = $(this).index();
	$("#info3Content").empty();
	$("#info3Content").append("<img id='contentClose' src='img/MediaAlliance/inputClose.gif'>");
	$("#info3Content").append("<img id='contentPic' src=" + infp3Pics[info3Id] + ">");
	$("#info3Content").append("<h1>" + infp3Titles[info3Id] + "</h1>");
	$("#info3Content").append("<p>" + infp3Txts[info3Id] + "</p>");
	TweenLite.to($("#info3Content"), .3, {css:{top:"2035px",display:"block",opacity:1}, ease:Expo.easeOut});

	$("#info3Content #contentClose").click(info3ContentClose);
}
function info3ContentClose(){
	TweenLite.to($("#info3Content"), .3, {css:{top:"2035px",display:"none",opacity:0}, ease:Expo.easeOut});
}


