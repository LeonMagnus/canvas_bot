const Discord = require("discord.js");
const Canvas= require('canvas');
const fs=require('fs');
const bot = new Discord.Client();

var Request = require('pixl-request');


var Image = Canvas.Image;
var canvas = new Canvas(700, 400)
var ctx = canvas.getContext('2d')

const img = new Image();
var prof=new Image();



const prefix="/";
var token = "";

bot.on('message', mes => {
var resu = mes.content.toLowerCase();
if(resu==prefix+"avatar"){
  mes.channel.send(`url de ton profile ${mes.author.displayAvatarURL}`)
}
if(resu==prefix+"hello"){

  mes.channel.send(`hello my frend ${mes.author.username}`);}
if(resu==prefix+"test"){
  var url =mes.author.displayAvatarURL ;
  var request = new Request();

  request.get( url, function(err, resp, data) {
  	if (err) throw err;
    img.onload = () =>{
        ctx.drawImage(img, 0, 0);}
     img.onerror = err => { throw err }
     img.src = 'testes.jpg'
    prof.onload=()=>{
      console.log("load");
        ctx.drawImage(prof,100,50);
      }
  	  prof.src = data;
      ctx.font = '60px Impact';
      ctx.rotate(0);
      ctx.fillText(mes.author.username, 100, 350);
      let attachment = new Discord.Attachment(canvas.toBuffer());
     mes.channel.send(`test ${prof.src}`,attachment);
})
}


});
bot.login(token);
