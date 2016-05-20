var num = 1;
var datas = {
		url: './question.php',
		method: 'post',
	};
var oWel = document.getElementsByClassName("welcome")[0];
var oList = document.getElementsByClassName("list")[0];
var oStart = document.getElementsByClassName("start")[0];
var oNext = document.getElementsByClassName("next")[0];
var oQue = document.getElementsByClassName("questions")[0]
var oAnws = document.getElementsByClassName("answers")[0]
var oSpan = document.getElementsByTagName("span")[0];
var oldHash = window.location.hash.substring(1);
oStart.addEventListener('click', start);
// window.onhashchange = function() {
// 	console.log("has changed");
// 	var newHash = window.location.hash.substring(1);
// 	if(newHash>oldHash) {
// 		num++;
// 		sendAjax();
// 	}else if (newHash<oldHash) {
// 		num--;
// 		sendAjax();
// 	}
// }
function start(){
	oWel.style.display = "none";
	oList.style.display = "block";
	sendAjax();
}

function ajax(obj) {
		var xhr = null;
		var url = obj.url;
		var method = obj.method;
		if(obj.data) {
			var data = obj.data;
		}


		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}else if(window.ActiveXObject) {
			var version = ['MSXML2.XMLHttp','Microsoft.XMLHTTP'];
			for(var i=0;i<version.length;i++) {
				try{
					return new ActiveXObject(version[i]);
					break;
				} catch(e) {

				}
			}
		} else {
			alert("浏览器不支持XML");
		}
		xhr.open(method,url,true);
		if(method=="post") {
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send("num=" + num);
		}else if(method=="get") {
			xhr.send(null);
		}
		xhr.onreadystatechange = function() {
			if(xhr.readyState==4) {
				if(xhr.status==200) {
					var info = JSON.parse(xhr.responseText)[0];
					console.log(info);
					// console.log(info["right"]);
					// console.log(info["answer4"]);
					var a = info["right"].split(",");

					callback(info);

					function callback(obj) {
						window.location.hash = num-1;
						oSpan.innerHTML = num-1;
						oQue.innerHTML = obj["question"];
						createAnws(obj["answer1"],"A.");
						createAnws(obj["answer2"],"B.");
						createAnws(obj["answer3"],"C.");
						createAnws(obj["answer4"],"D.");
						var aInput = oAnws.getElementsByTagName("input");
						console.log(aInput);
						// console.log(aInput["length"]);
						var aLi = document.getElementsByTagName("li");
						console.log(aLi);
						var right = obj["right"].split(",");
						var len = aLi.length;
						console.log(len);
						function createAnws(order,str) {
							if(order&&order!==null) {
								var oLi = document.createElement("li");
								var oInput = document.createElement("input");
								oInput.type = "checkbox";
								oInput.value = str;
								oAnws.appendChild(oLi);
								oLi.appendChild(oInput);
								oLi.innerHTML += str;
								oLi.innerHTML += order;
							}
						
						}

						function checkRight(arr) {
							// console.log(len);
							var checkNum = 0;
							for(var i=0;i<len;i++) {
								// console.log(i);
								// console.log(aLi[i]);
								if(aInput[i].checked) {
									console.log(aInput[i]);
									arr.forEach( function(ele) {
										// console.log(ele);
										if(ele == i+1) {
											checkNum++;
										}
									});
								}
							}
							console.log(checkNum);	
							// console.log(checkNum);
							if(checkNum==arr.length) {
								checkNum = 0;
								return true;
							} else {
								checkNum = 0;
								return false;
							}

						}

						function listen() {
							if(checkRight(right)){
								for(var i=0;i<len;i++) {
									aLi[0].removeChild(aInput[0]);
									oAnws.removeChild(aLi[0]);
								}

								// setTimeout(function() {
								// 	console.log("delay!!!");
								// }, 10000)
								sendAjax(); 
								oNext.removeEventListener('click', listen);
							}else {
								alert("you are wrong!!");
							}
						}

						

						oNext.addEventListener('click', listen);

						// oNext.addEventListener('click', checkRight)

						
						console.log(right)
					}


				}
			}
		}
	}

	// function createAnws() {
	// 	var oLi = document.createElement("li");
	// 	oAnws.appendChild(oLi);
	// }

	function sendAjax() {
		ajax(datas);
		num++;
		// console.log(num);	
	}