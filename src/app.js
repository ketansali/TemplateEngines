const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

const publicPath = path.join(__dirname,"public")
const tmppath = path.join(__dirname,"tmp/views")
const partialpath = path.join(__dirname,"tmp/partials")
app.use(express.static(publicPath))
app.set("view engine","hbs")
app.set("views",tmppath)
hbs.registerPartials(partialpath)


app.get("/",(req,res)=>{
    res.render('index',{
        userName : "Ketan Sali"
    })
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/",(req,res)=>{
    res.send('Welcome To My WebSite')
})
app.get("*",(req,res)=>{
    res.render('404',{
        error : "Page not Found"
    })
})

app.listen(3000,()=>{
    console.log('Server Is Running On PORT NO : 3000');
})