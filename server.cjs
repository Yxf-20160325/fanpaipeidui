const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
const PORT = process.env.PORT || 234;
app.listen(PORT, () => {
    console.log(`翻牌配对服务已启动\n`);
});
