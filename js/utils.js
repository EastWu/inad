// JavaScript Document

//--------------------------------
//验证邮件地址
function checkEmail(emailAddress) {
	var Regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (Regex.test(emailAddress)){
		return true;
	} else {
		return false;
	} 
}


//--------------------------------
//监测应用是否是本地运行
function checkLocal() {
	//return location.host == "127.0.0.1:8020";
	if (location.host == "127.0.0.1:8020" || location.host == "") {
		return true;
	} else {
		return false;
	}
}

//--------------------------------
//数值计算
function numCalculation(oldVol, Increase) {
	return (parseInt(oldVol.replace("px","")) + Increase) + "px";
}

//--------------------------------
//隐藏对象
function hideObj(obj) {
	$(obj).css("display", "none");
}

//--------------------------------
//获取url的参数
function getRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

//--------------------------------
//给phone加XXXX
function phoneXXXX(phoneStr) {
	if (phoneStr.length > 3) {
		if (phoneStr.length > 7) {
			var endStr = phoneStr.substring(7, phoneStr.length);
		}
		phoneStr = phoneStr.substr(0,3) + ("XXXX").substr(0, (phoneStr.length - 3));
		if (endStr) {
			phoneStr += endStr;
		}
		return phoneStr;
	} else {
		return phoneStr;
	}
}


//--------------------------------
//截图
//displayObject: 要截取的DOM对象
//callback: 完成后回调函数，定义此函数接收截取结果
//pictyle: 返回的图片类型，"img"或"dataUrl"，img将返回img元素，dataUrl将返回图片数据
function snapPic(displayObject, callback, pictyle){
	var type = pictyle ? pictyle : "img";
	html2canvas(displayObject, {
		allowTaint: true,
		taintTest: false,
		onrendered: function(canvas) {
			//截图完成
			//canvas.id = "mycanvas";
			//document.body.appendChild(canvas);
			//var dataUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //生成png图像并下载
			//var dataUrl = canvas.toDataURL();//生成base64图片数据
			canvas.crossOrigin = "*";
			var dataUrl = canvas.toDataURL("image/jpeg");//生成jpg图像
			
			if (callback) {
				if (type == "img") {
					var newImg = document.createElement("img");
					newImg.src =  dataUrl;
					callback(newImg);
				} else {
					callback(dataUrl);
				}
			}
			//document.body.appendChild(newImg);
			//document.getElementById("page1").appendChild(newImg);
			//alert("ok");
			//window.location.href = dataUrl;//下载
		}
	});				
}


//--------------------------------
//截取整个页面
function snapPage(){
	//alert("开始截图");
	
	html2canvas(document.body, {
		allowTaint: true,
		taintTest: false,
		onrendered: function(canvas) {
			//截图完成
			//canvas.id = "mycanvas";
			//document.body.appendChild(canvas);
			//生成base64图片数据
			var dataUrl = canvas.toDataURL();
			var newImg = document.createElement("img");
			newImg.src =  dataUrl;
			//document.body.appendChild(newImg);
			document.getElementById("page1").appendChild(newImg);
			//alert("ok");
		}
	});				
}

//--------------------------------
//切换容器内的内容
function shiftContent(content, container){
	container.empty();//清空容器
	container.load(content);//加载内容
	//container.append("<div>aaasasasasa2</div>");  //追加元素至容器
}

//--------------------------------
//图片预加载
//  arr：可以是存放图片路径的一个数组，也可以是选取到的img的jquery对象；
//  funLoading：每一个单独的图片加载完成后执行的操作；
//  funOnLoad：全部图片都加载完成后的操作；
//  funOnError：单个图片加载出错时的操作。
function loadimg(arr, funLoading, funOnLoad, funOnError){  
    var numLoaded=0,  
    numError=0,  
    isObject=Object.prototype.toString.call(arr)==="[object Object]" ? true : false;  
   
    var arr=isObject ? arr.get() : arr;  
    for(a in arr){  
        var src=isObject ? $(arr[a]).attr("data-src") : arr[a];  
        preload(src,arr[a]);  
    }  
   
    function preload(src,obj){  
        var img=new Image();  
        img.onload=function(){  
            numLoaded++;  
            funLoading && funLoading(numLoaded,arr.length,src,obj);  
            funOnLoad && numLoaded==arr.length && funOnLoad(numError);  
        };  
        img.onerror=function(){  
            numLoaded++;  
            numError++;  
            funOnError && funOnError(numLoaded,arr.length,src,obj);  
        };
        img.src=src;  
    }  
}


//--------------------------------
//绑定文本提示
function inputBind(txt) {
	//输入文本处理
	txt.bind({ 
			focus:focusHandler, 
			blur:blurHandler
	});
	
	function focusHandler() {
		if (this.value == this.defaultValue){ 
			this.value=""; 
		} 
	}
	
	function blurHandler() {
		if (this.value == ""){ 
			this.value = this.defaultValue; 
		} 
	}
}


//--------------------------------
//返回当前本地时间
function getTime()
{
	//获取时间
	var date = new Date();
	
	var currentYear = date.getFullYear();
	var currentMonth = date.getMonth() + 1;
	var currentDay = date.getDate();
	
	if (currentMonth < 10) currentMonth = "0" + String(currentMonth);
	if (date.date < 10) currentDay = "0" + String(currentDay);
	
	var _hours = date.getHours();
	var _minutes = date.getMinutes();
	var _seconds = date.getSeconds();
	
	if (_hours < 10) _hours = "0" + String(_hours);
	if (_minutes < 10) _minutes = "0" + String(_minutes);
	if (_seconds < 10) _seconds = "0" + String(_seconds);
	
	var str = currentYear + "-" + currentMonth + "-" + currentDay + " " + _hours + ":" + _minutes + ":" + _seconds;
	return str;
}