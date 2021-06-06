const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));
let items = [];

app.get("/",function(req,res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options)
    res.render("list",{
        Day: day,  items : items
    });
});
app.post("/",function(req,res){
    let newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/")
});


app.listen(process.env.PORT || 3000,() =>
    console.log("Server is working")
);