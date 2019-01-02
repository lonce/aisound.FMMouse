const kport=process.argv[2] || 3000
const express = require("express")
const app = express()

var m_useRoot="/www";
app.use(express.static(__dirname + m_useRoot));
app.listen(kport)
