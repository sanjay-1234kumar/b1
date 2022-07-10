
const express=require('express');


const app=express();


app.use('',express.static('build'));



app.get('*',(req,res,next)=>{

    return(res.sendFile(__dirname+'/build/index.html'));
    
});

app.listen(3500,()=>{

    console.log('sever is listening at port 3500');

});