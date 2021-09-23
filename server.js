const express = require('express');
const log = console.log 
const chalk = require('chalk')
const app = express();
var favicon = require('serve-favicon')
const path = require('path');
const cors = require('cors');


app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use(express.json());



const fileDirectory = (path.join(__dirname, "public/"))
app.use(express.static(fileDirectory));
app.get("**", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html")); 
  app.use(favicon(path.join(__dirname,'public/favicon.ico')));
 });

const port = process.env.PORT || 4000;
const server = app.listen(port, () => log(chalk.blueBright(`Server is up and running on port ${port}`)));
module.exports = server