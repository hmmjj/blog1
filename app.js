const express = require('express');
//创建web服务器
const app = express();
//当客户端以get方式请求/的时候
app.get('/', (req, res) => {
    res.send('Hello Blog');
})
app.listen(3000, err => {
    if (err == null) {
        console.log('服务器启动成功，请访问http://loaclhost:3000');

    }
})