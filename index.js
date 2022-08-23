let div = document.getElementsByClassName("member")

//以下鯖関連のアイコン等の画像取得↓
const { Client } = require("discord.js")
const client = new Client({ intents: 32767 })

document.getElementsByID("serverIcon") = client.guilds.cache.get("941651004884152380").iconURL

function getUserIconURL(ID){
    return client.users.fetch(ID).iconURL
    console.log(client.users.fetch(ID).iconURL)
    console.log(client.guilds.cache.get("941651004884152380").iconURL)
}

$(function() {
	setTimeout(function(){
		$('.text_fadein').fadeIn(1000);
	},500);
});
