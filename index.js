const { Client } = require("discord.js")
const client = new Client()

//discord.jsのAPIでID入力するだけでpictureフォルダにアイコン入れたい(願望) By梅干し

let div = document.getElementsByClassName("member")
// document.getElementsByClassName("flex member"). = client.users.fetch().iconURL

$(function() {
	setTimeout(function(){
		$('.text_fadein').fadeIn(1000);
	},500);
});
