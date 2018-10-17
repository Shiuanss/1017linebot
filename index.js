//--------------------------------
// 載入必要的模組
//--------------------------------
var linebot = require('linebot');
var express = require('express');


//--------------------------------
// 填入自己在linebot的channel值
//--------------------------------
var bot = linebot({
    channelId: '1615374564',
    channelSecret: '69041d4b3fdf836219c4a0ac03271dfe',
    channelAccessToken: 'ZjYl7LBGtHWYkIQHU+4DG26X9oiLvHxQAHYmSM4mtKRG0xXZ8c0hJISyKA7OEJeLSqsS26D4wL+Nlx7zRqjigNCCHCn3UHpuJ9x4YbStn9+nGeO+Rrej1ahzk/4/WMtrO6AuK1kd1fJmK8Buaw5xeQdB04t89/1O/w1cDnyilFU='
});


//--------------------------------
// 機器人接受訊息的處理
//--------------------------------
//--------------------------------
// 機器人接受訊息的處理
//--------------------------------
bot.on('message', function(event) {
    event.reply(
        {
            "type": "template",
            "altText": "This is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://bt21.herokuapp.com/imgs/a.jpg",
                "imageAspectRatio": "rectangle",
                "imageSize": "cover",
                "imageBackgroundColor": "#FFFFFF",
                "title": "Menu",
                "text": "Please select",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [
                    {
                      "type": "postback",
                      "label": "Buy",
                      "data": "action=buy&itemid=123"
                    },
                    {
                      "type": "postback",
                      "label": "Add to cart",
                      "data": "action=add&itemid=123"
                    },
                    {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/123"
                    }
                ]
            }
          }
    );  
});


//--------------------------------
// 建立一個網站應用程式app
// 如果連接根目錄, 交給機器人處理
//--------------------------------
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


//--------------------------------
// 可直接取用檔案的資料夾
//--------------------------------
app.use(express.static('public'));


//--------------------------------
// 監聽3000埠號, 
// 或是監聽Heroku設定的埠號
//--------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("正在監聽埠號:", port);
});