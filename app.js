// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");


var items = ["breakfast", "lunch", "dinner"];
var workItems = [];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
 let day=date.getDate();
  res.render("list", {
    ListTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});
// for work section
app.get("/work", function(req, res) {
  res.render("list", {
    ListTitle: "Work",
    newListItems: workItems
  });
});
// about section
app.get("/about",function(req,res)
{
  res.render("about");
})
app.listen(3000, function(req, res) {
  console.log("server is runinng on 3000");
})
