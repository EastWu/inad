jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,{
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
});
//设置播放路径
var url = ["video/qq.mp4","video/s2.mp4"];

//剧中显示
function setCenter(id){
	$(id).each(function(i,e){
		var h = $(e).outerHeight();
		$(e).css({"margin-top":(492-$(e).height())/2+"px"})
	});
}

//初始化播放器
function myPlayer(id,f){
	var player=jwplayer(id).setup({
		flashplayer: 'jwplayer.flash.swf',
		file:f,
		height: 438,
		width: 716,
		dock: false,
		events:{
			onPause:function(){ console.log("暂停!!!"); }
		}
	});
}

//播放动作
function funKey(n,e){
	$(".vo-nul").animate({"margin-left":-n*716},'easeOutExpo');
	
	jwplayer("Player0").play(false);
	jwplayer("Player1").play(false);
	var id = "Player"+n;
	myPlayer(id,url[n]);
	jwplayer(id).play(true);
}

//设置切换
function setTab(){
	$(".co-tab span").each(function(i,e){
		$(e).click(function(){
			var mk = $(e).attr("mk");
			$(".co-tab span").removeClass("on");
			$(e).addClass("on");
			$(".co-cont dd").hide();
			$(".co-cont dd").eq(i).show();
			var dd = $(".co-cont dd").eq(i);
			if(mk=="0"){
				dd.slide({ mainCell:".bd ul",effect:"leftLoop",scroll:1,autoPlay:false});
			}
			$(e).attr("mk",parseInt(mk)+1);
		});
	});
}

$(function(){
	//合作品牌切换
	setTab();
	$(".co-tab span").eq(0).click();
	//奖项弹框
	$(".prize-wp .pro").each(function(i,e){
		$(e).click(function(){
			var mk = $(e).attr("mk");
			$(".prot").hide();
			$(".prot").eq(i).show();
			if(mk=="0"){
				$(".prot").eq(i).find(".video-wp").find("dd").each(function(i,e){
					$(e).slide({ mainCell:".bd ul",effect:"leftLoop",scroll:1,autoPlay:false});
				});
			}
			$(e).attr("mk",parseInt(mk)+1);
		});
	});
	
	//关闭弹框
	$(".bomt .close").click(function(){
		$(this).parent().hide();
		jwplayer("Player0").play(false);
		jwplayer("Player1").play(false);
	});
	

	//点击案例弹出弹框
	$(".picList li").each(function(i,e){
		$(e).find(".caseni").click(function(){
			var intm = $(this).attr("ast");
			// var mk = $(this).attr("mk");
			// $(".case-mark .bomt").hide();
			// $(".case-mark .bomt").eq(intm).show();
			// setCenter(".case-b");
			// setCenter(".case-c");
			// if(mk=="0"){
			// 	$(".case-mark .bomt").eq(intm).find(".case-wp").slide({ mainCell:".bd ul",effect:"leftLoop",vis:3,scroll:1,autoPlay:false});
			// }
			// $(this).attr("mk",parseInt(mk)+1);
			$("#info2Content").css("display","block");
			$("#info2Content").empty();
			$("#info2Content").append("<img id='contentClose' src='img/MediaAlliance/inputClose.gif'>");
			$("#info2Content").append("<h1>" + DoDatas[intm].title + "</h1>");
			$("#info2Content").append("<div class='leftLoop3'></div>");
			$(".leftLoop3").append("<div class='hd'><a class='next'></a><a class='prev'></a></div>");
			$(".leftLoop3").append("<div class='bd'></div>");
			$(".leftLoop3 .bd").append("<ul class='picList3'></ul>");
			for(i = 0; i < DoDatas[intm].num; i++){
				$(".leftLoop3 .bd .picList3").append("<li><div class='pic'><img src=" + DoDatas[intm].pic[i] + " /></div><div class='txt'><h2>" + DoDatas[intm].topic[i] + "</h2><p>" + DoDatas[intm].txt[i] + "</p></div></li>");
			}

			setTimeout(function(){
				jQuery(".leftLoop3").slide({ mainCell:".bd ul",effect:"leftLoop",vis:1,scroll:1,autoPlay:false});
			},9);

			TweenLite.to($("#info2Content"), .3, {delay:.1,css:{display:"block",opacity:1}, ease:Expo.easeOut});
			$("#info2Content #contentClose").click(info2ContentClose);
		});
		$(e).find(".caseni").hover(function(){
			// $(this).find("img").hide();
			TweenLite.to($(e).find("img"), .3, {css:{display:"none",opacity:0}, ease:Cubic.easeOut});
		},function(){
			// $(this).find("img").show();
			TweenLite.to($(e).find("img"), .3, {css:{display:"block",opacity:1}, ease:Cubic.easeOut});
		});
	});

	
	//播放视频

	myPlayer("Player0",url[0]);
	$(".vo-wp span").each(function(i,e){
		$(e).click(function(){
			$(".vo-tit span").removeClass("on");
			$(".vo-tit span").eq(i).addClass("on");
			funKey(i,e);
		});
	});
	$(".vo-tit span").each(function(i,e){
		$(e).hover(function(){
			$(".vo-tit span").removeClass("on");
			$(e).addClass("on");
			funKey(i,e);
		});
	});
});
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






