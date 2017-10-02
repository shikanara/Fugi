
// Khai báo
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var today = new Date();
var h = today.getHours();
var phut = today.getMinutes();
var answeredThreads = {};
var botkey = "http://sandbox.api.simsimi.com/request.p?key=ce820674-1f9e-438f-bd68-a018068666d6&lc=vi&ft=1.0&text=";
login(
	{
	email: "luanmarucnttno11@gmail.com", 
	password: "luan123456" 
	},
function callback (err, api){
	if(err) return console.error(err);
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	
	api.listen(function callback(err, message){
		//Khi nhận tin nhắn "STOP" của người gửi, con bot sẽ ngừng auto
       if(message.body === "STOP") {
            console.log("FormID: " + message.threadID + '->Message: '+message.body);
            api.sendMessage("Fugi ngừng hoạt động!\n①Fugi① ", message.threadID);
            except[message.threadID] = true;
            return;
        }

        // Tắt hoàn toàn con bot này luôn (không auto rep cho ai nữa)
        else if(message.body === "STOPALL") {
			api.sendMessage(";) Fugi ngừng hoạt động trên cloud!\n①Fugi① ", message.threadID);
			api.markAsRead(message.threadID);
			return api.logout(err);
		}
		else if(message.body === 'Sos' || message.body === 'sos'|| message.body === 'SOS'|| message.body === 'SOs') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Khi xảy ra tai nạn giao thông, các vụ việc có yếu tố tội phạm, vi phạm trật tự an toàn xã hội, cướp giật, đánh nhau, bạo hành... thì gọi 113 để được cảnh sát phản ứng nhanh can thiệp kịp thời.", message.threadID);
			api.sendMessage("Đường dây nóng 114 (chữa cháy và cứu hộ cứu nạn)", message.threadID);
			api.sendMessage("Khi phát hiện vụ bạo hành trẻ em, phụ nữ, bạo hành gia đình hoặc có nhu cầu tư vấn sức khỏe, dinh dưỡng gia đình, người dân có thể gọi đến đường dây nóng 1800 1567.\n-----------\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === 'L oi' || message.body === 'Luân ơi' || message.body === 'Luân ơi?'|| message.body === 'Shika ơi?'|| message.body === 'Shika'|| message.body === 'shika' ) { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Mình là Fugi. Hiện tại Shika đang bận! Bạn có thể để lại lời nhắn hoặc tin nhắn thoại hay trò chuyện cùng mình!", message.threadID);
			return;
		}
		else if(message.body === 'hu' ||message.body === 'hú' ||message.body === 'Hú' ||message.body === 'Hu') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Hú gì thế ạ? Lạc vào sở thú rồi hả?. Shika đang bạn tí ạ! \n①Fugi①.", message.threadID);
			return;
		}
		else if(message.body === 'Fugi là ai?' ||message.body === 'Fugi là gì?' ||message.body === 'Fugi là gì của Shika?' ||message.body === 'Fugi là ai'||message.body === 'Fugi là gì') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Fugi là bạn của Shika, hiện tại bạn ấy đang bận, mình thay mặt bạn ấy!\n①Fugi①.", message.threadID);
			return;
		}
		else if(message.body === 'a du'||message.body === 'a đù'||message.body === 'A đù') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Á mới chả đù cái gì chứ? \n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === 'shika đâu rồi'||message.body === 'Shika đang làm gì' || message.body === 'Nó đang làm gì'|| message.body === 'Shika đang làm gì?'|| message.body === 'Shika đang làm gì') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("A Shika đang thực hiện một khóa nghiên cứu lớn :v. Hhahaa e đùa nhé tí đừng khoe tí A shika lại đánh em huhuhu :(", message.threadID);
			return;
		}
		else if(message.body === 'em chua 18'||message.body === 'chua 18'||message.body === 'Em chua 18'||message.body === 'em chưa 18'||message.body === 'e chua 18') {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Chào bạn Bum Bum sẻ gửi bạn link xem video online phim 'Em chưa 18' Full HD. http://phimhayplus.com/phim/xem-phim-em-chua-18-11011/xem-phim.html?sbro=redirect Chúc bạn xem phim vui vẻ\n Nhớ bật chế độ HD và đừng cảm thấy phiền hà với quảng cáo nhé!", message.threadID);
			return;
		}
		else if(message.body === "Tks ban" ||message.body === "Cam on"||message.body === "Tks"||message.body === "tks" ||message.body === "Cám ơn nha"||message.body === "Cảm ơn nha"||message.body === "Cám ơn Fugi" ||message.body === "Cảm ơn Fugi nhiều") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ok. Tiền là được rồi ơn nghĩa gì.\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === "sđt" || message.body === "Sdt" || message.body === "sdt") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("SĐT của Shika là: 01696876539 nhé.", message.threadID);
			return;
		}
		else if(message.body === "bai bai" || message.body === "Bai bai" || message.body === "Bye bye"|| message.body === "Bái bai"|| message.body === "bái bai") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Uk tạm biết nhé! Hẹn gặp lại.\n①Fugi①", message.threadID);
			return;
		}
		
		else if(message.body === 'ok' ||message.body === 'Ok') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ok. Goodbye cưng :)\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === 'Hello' ||message.body === 'hello') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Hi! ٩(^‿^)۶)\n①Fugi①", message.threadID);
			return;
		}
		else if(message.body === 'G9' ||message.body === 'Ngu ngon'||message.body === 'Ngủ ngon'||message.body === 'Ngu ngon nhe'||message.body === 'Ngủ ngon nhé'||message.body === 'Ngủ ngon mơ đẹp') { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Ok. Ngủ ngon nhé! :)\n①Fugi①", message.threadID);
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
					api.sendMessage(SimsimiAnswered+"\n♬♬♬♬♬♬♬♬♬♬\n①Fugi①", message.threadID);
					api.markAsRead(message.threadID);
					console.log("Answered:"+SimsimiAnswered);
					return;
				}
				if (body.indexOf("502 Bad Gateway") > 0 || body.indexOf("response") < 0){
					api.sendMessage("Shika đã ngoại tuyến, vui lòng để lại tin nhắn! ;)\n①Fugi① ", message.threadID );
					
				}
			});
		}
	});
})