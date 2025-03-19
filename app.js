const express=require("express");
const app =express();
const port =process.env.PORT || 4000;
const path =require('path');


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'publico','home.html'))
})
app.get('/about',(rea,res)=>{
    res.sendFile(path.join(__dirname,'publico','about.html'))
})

app.listen(port,()=>console.log(`server running on http://localhost:${port}`))