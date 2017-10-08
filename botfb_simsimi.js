
// Khai báo
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var today = new Date();
var h = today.getHours();
var phut = today.getMinutes();
var answeredThreads = {};
var botkey = "http://sandbox.api.simsimi.com/request.p?key=4d645204-b49c-436e-8744-72b1c8416a0b=vi&ft=1.0&text=";
login(
	{
	email: "luanmarucnttno11@gmail.com", 
	password: "luan123456" 
	},
function callback (err, api){
	if(err) return console.error(err);
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	
	api.listen(function callback(err, message){
		//Nếu nằm trung khung 12h đến 14h thì báo mình bận và nhớ đối tượng chỉ reply một lần
		if(h >= 12 && h <= 13 && !answeredThreads.hasOwnProperty(message.threadID)){
			api.getUserInfo(message.senderID, function(err, ret) {
                if(err) return console.error(err);
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Xin lỗi [" + ret[prop].name + "] nhé! Giờ Shika đã đi ngủ trưa roài ;)!\nVui lòng để lại tin nhắn nhé!\n①Fugi①", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });
		} 
		else if(h >= 23 && h <= 5 && !answeredThreads.hasOwnProperty(message.threadID)){
			api.getUserInfo(message.senderID, function(err, ret) {
                if(err) return console.error(err);
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Ờ [" + ret[prop].name + "] à! Giờ Shika đã đi ngủ mất tiêu roài ;)!\nVui lòng để lại tin nhắn đêm khuya nhé, nếu nó dậy thì mình thông báo cho!\n①Fugi①", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });
		}
		// .indexOf( "is string" )
		//Khi nhận tin nhắn "STOP" của người gửi, con bot sẽ ngừng auto
       else if(message.body === "STOP") {
            console.log("FormID: " + message.threadID + '->Message: '+message.body);
            api.sendMessage("Fugi ngừng hoạt động!\n♬♬♬♬\n①Fugi①", message.threadID);
            except[message.threadID] = true;
            return;
        }
		 
        // Tắt hoàn toàn con bot này luôn (không auto rep cho ai nữa)
        else if(message.body === "STOPALL") {
			api.sendMessage(";) Fugi ngừng hoạt động trên cloud!\n♬♬♬♬\n①Fugi①", message.threadID);
			api.markAsRead(message.threadID);
			return api.logout(err);
		}
		 else if(message.body.toLowerCase().indexOf("my web") > -1||message.body.toLowerCase().indexOf("web của tôi") > -1|| message.body.toLowerCase().indexOf("web cua toi") > -1) {
			api.sendMessage("Trang web của cậu đây: http://luannguyenblog.azurewebsites.net/ \n♬♬♬♬\n①Fugi①", message.threadID);
			api.markAsRead(message.threadID);
			return;
		}
		//sos
		else if(message.body.toLowerCase().indexOf("sos") > -1) {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Khi xảy ra tai nạn giao thông, các vụ việc có yếu tố tội phạm, vi phạm trật tự an toàn xã hội, cướp giật, đánh nhau, bạo hành... thì gọi 113 để được cảnh sát phản ứng nhanh can thiệp kịp thời.", message.threadID);
			api.sendMessage("Đường dây nóng 114 (chữa cháy và cứu hộ cứu nạn)", message.threadID);
			api.sendMessage("Khi phát hiện vụ bạo hành trẻ em, phụ nữ, bạo hành gia đình hoặc có nhu cầu tư vấn sức khỏe, dinh dưỡng gia đình, người dân có thể gọi đến đường dây nóng 1800 1567.\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body.toLowerCase().indexOf("l ơi")> -1 || message.body.toLowerCase().indexOf("luân ơi")> -1||message.body.toLowerCase().indexOf("shika ơi")> -1 ||message.body.toLowerCase().indexOf("shika")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Mình là Fugi. Hiện tại Shika đang bận! Bạn có thể để lại lời nhắn hoặc tin nhắn thoại!\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === 'hu' ||message.body === 'hú' ||message.body === 'Hú' ||message.body === 'Hu') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Hú gì thế ạ? Lạc vào sở thú rồi hả?. Shika đang bạn tí ạ! \n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body.toLowerCase().indexOf("nè")> -1 || message.body.toLowerCase().indexOf("hu")> -1||message.body.toLowerCase().indexOf("hú")> -1) {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Fugi là bạn của Shika, hiện tại bạn ấy đang bận, mình thay mặt bạn ấy trả lời tự động bạn nhé!\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body.toLowerCase().indexOf("a đù")> -1|| message.body.toLowerCase().indexOf("a du")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Á mới chả đù cái gì chứ? \n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body.toLowerCase().indexOf("shika đâu rồi")> -1 || message.body.toLowerCase().indexOf("shika đang làm gì")> -1 || message.body.toLowerCase().indexOf("nó đang làm gì")> -1 || message.body.toLowerCase().indexOf("shika đang làm gì?")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("A Shika đang thực hiện một khóa nghiên cứu lớn :v. Hhahaa e đùa nhé tí đừng khoe tí A shika lại đánh em huhuhu :(\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//Xem phim em chưa 18
		else if(message.body.toLowerCase().indexOf("phim e chua 18")> -1|| message.body.toLowerCase().indexOf("xem phim em chua 18")> -1||message.body.toLowerCase().indexOf("xem phim em chưa 18")> -1|| message.body.toLowerCase().indexOf("phim em chưa18")> -1) {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Link phim online 'Em chưa 18' Full HD. http://phimhayplus.com/phim/xem-phim-em-chua-18-11011/xem-phim.html?sbro=redirect Chúc bạn xem phim vui vẻ\n Nhớ bật chế độ HD và đừng cảm thấy phiền hà với quảng cáo nhé!\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//thank
		else if(message.body.toLowerCase().indexOf("cam on")> -1||message.body.toLowerCase().indexOf("thank")> -1||message.body.toLowerCase().indexOf("cám ơn")> -1||message.body.toLowerCase().indexOf("cảm ơn")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ok! Tiền là được rồi ơn nghĩa gì.\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//my phone
		else if(message.body.toLowerCase().indexOf("my phone")> -1||message.body.toLowerCase().indexOf("sdt")> -1||message.body.toLowerCase().indexOf("sđt")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("SĐT của Shika là: 01696876539 nhé.\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//bye
		else if(message.body.toLowerCase().indexOf("bye")> -1||message.body.toLowerCase().indexOf("pp")> -1||message.body.toLowerCase().indexOf("good bye")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Uk tạm biết nhé! Hẹn gặp lại.\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//ok
		else if(message.body.toLowerCase().indexOf("ok")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Quánh sập mặt giừ :poop:! Dạ chứ ok gì?\n♬♬♬♬\n①Fugi①", message.threadID);
			return;
		}
		//hello
		else if(message.body.toLowerCase().indexOf("hello")> -1||message.body.toLowerCase().indexOf("hi")> -1) {
				console.log("FormID: " + message.threadID + '->Message: '+message.body);			
			api.getUserInfo(message.senderID, function(err, ret) {
                for(var prop in ret) {
                     api.sendMessage( "Hi! " + ret[prop].name + "\n♬♬♬♬\n①Fugi①",message.threadID);
                }
            });
			return;
		}
		//g9
		else if(message.body.toLowerCase().indexOf("g9")> -1||message.body.toLowerCase().indexOf("ngu ngon")> -1||message.body.toLowerCase().indexOf("ngủ ngon")> -1) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			
			api.sendMessage("Ok. Ngủ ngon nhé! :v\n", message.threadID);
			api.sendMessage("_ღ☆ღ_..¸.•´¨)¸.•*¨)\n(´¯`•.•´¯`).. .. • .. .. .\n.`•.¸¸.•´¯`•.¸¸.•´¯\n(¯`•._.̾.•. Chúc crush ..۰..\n.. (¯`•._.۰.Buổi tối.\n:___ ღ.ღ\nღ.ღ.ღ ___:\n° Yên bình, Ngon Giấc °\n° và Niềm vui ° ღღ♀ ☺\n♬♬♬♬\n♬♬♬♬\n①Fugi①", message.threadID);
			
			return;
		}
		 else if (message.senderID==="id_loại_trừ_1"||message.senderID==="id_loại_trừ_2") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}
		 else if (message.senderID==="id_loại_trừ_1"||message.senderID==="id_loại_trừ_2") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}else if (message.body){
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			request(botkey + encodeURI(message.body),  
			function(error, response, body){  
				if (error) api.sendMessage("Tao đang đơ, không trả lời được :)", message.threadID);
				var ans = JSON.parse(body);
				if (ans.result == "100"){
					SimsimiAnswered = ans.response;
					var re = /simi/gi;
					var newstr = SimsimiAnswered.replace(re, "Fugi");
					api.sendMessage(SimsimiAnswered+"\n♬♬♬♬\n①Fugi①", message.threadID);
					api.markAsRead(message.threadID);
					console.log("Answered:"+SimsimiAnswered);
					return;
				}
				if (body.indexOf("502 Bad Gateway") > 0 || body.indexOf("response") < 0 && !answeredThreads.hasOwnProperty(message.threadID)){
					api.getUserInfo(message.senderID, function(err, ret) {
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Xin lỗi " + ret[prop].name + " nhá!\nShika đã ngoại tuyến, vui lòng để lại tin nhắn! ;)\n♬♬♬♬\n①Fugi①", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });		
				}
			});
		}
	});
})