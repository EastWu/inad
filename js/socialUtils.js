// JavaScript Document




/**
		 * 分享微博
		 * @param platform 所属平台
		 * @param title 文字内容
		 * @param targetUrl 回跳地址
		 * @param pic 配图url
		 * @param title 标题内容
		 * 
		 */
		function shareMicroBlog(platform, text, targetUrl, pic, title) {
			if (pic && pic.search("douban.com/view/photo/photo/") != -1) {
				pic = "http://bingo.douban.com/img?src=" + pic;
			}
			
			text = encodeURIComponent(text);
			targetUrl = encodeURIComponent(targetUrl);
			pic = encodeURIComponent(pic);
			title = encodeURIComponent(title);
			//encodeURI(
			
			//alert(targetUrl);
			
			
			switch (platform) {
				case "renren":
					renren();
					break;
				
				case "sina":
					sina();
					break;
				
				case "kaixin":
					kaixin()
					break;
				
				case "msn":
					msn()
					break;
				
				case "qzone":
					qzone()
					break;
				
				case "tencent":
					tencent()
					break;
				
				case "sohu":
					sohu()
					break;
				
				case "douban":
					douban()
					break;
			}
			
			
			
			function renren()
			{
				var str = "http://widget.renren.com/dialog/share";
				str += "?resourceUrl=" + targetUrl;
				str += "&srcUrl=" + targetUrl;
				str += "&pic=" + pic;
				str += "&description=" + text;
				str += "&title=" + title;
				window.open(str)
			}
			
			function sina()
			{
				var str = "http://service.weibo.com/share/share.php";
				str += "?url=" + targetUrl;
				str += "&title=" + text;
				str += "&pic=" + pic;
				str += "&appkey=" + weibo_appkey;
				//str += "&appkey=" + "3015934887";
				str += "&source=" + "";
				str += "&sourceUrl=" + "";
				str += "&content=" + "utf-8";
				str += "&pic=" + pic;
				str += "&retcode=0";
				str += "&ralateUid=";
				window.open(str)
			}
			
			function kaixin()
			{
				var str = "http://www.kaixin001.com/rest/records.php";
				str += "?url=" + targetUrl;
				str += "&content=" + text;
				str += "&pic=" + pic;
				
				str += "&starid=" + 0;
				str += "&aid=" + 0;
				str += "&style=" + 11;
				str += "&stime=" + "";
				str += "&sig=" + "";
				
				window.open(str)
			}
			
			function msn()
			{
				var str = "http://profile.live.com/badge";
				str += "?url=" + targetUrl;
				str += "&title=" + text;
				str += "&pics=" + pic;
				str += "&pic=" + pic;
				str += "&images=" + pic;
				window.open(str)
			}
			
			function qzone()
			{
				var str = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey";
				str += "?url=" + targetUrl;
				str += "&desc=" + "快来点点看！";
				str += "&summary=" + text;
				str += "&title=" + title;
				str += "&site=" + "博弈互动";
				str += "&pics=" + pic;
				window.open(str)
			}
			
			function tencent()
			{
				var str = "http://v.t.qq.com/share/share.php";
				str += "?url=" + targetUrl;
				str += "&title=" + text;
				str += "&appkey=" + qq_appSecret;
				str += "&pic=" + pic;
				str += "&description=" + text;
				str += "&text=" + text;
				str += "&video_url=" + text;
				//alert(str);
				window.open(str)
			}
			
			function sohu()
			{
				var str = "http://t.sohu.com/third/post.jsp";
				str += "?url=" + targetUrl;
				str += "&title=" + encodeURI(text);
				str += "&pic=" + pic;
				window.open(str)
			}
			
			function douban()
			{
				var str = "http://www.douban.com/share/recommend";
				str += "?href=" + targetUrl;
				str += "&text=" + text + targetUrl;
				str += "&name=" + title;
				str += "&desc=" + "";
				str += "&image=" + pic;
				str += "&apikey=" + "0c43c6edd5d52e0d24cb54c9817f8a27";
				/*$.get("http://battlepit.douban.com/common/short_link?callback=?&url=" + str, onC);
				function onC(data, textStatus, xhr) {
					alert(data.r);
					window.open(data.r)
				}
				*/
				window.open(str)
			}
		}
