import express from 'express';
const app = express();
const port =3001;


app.listen(port,()=>{
    console.log("server is running");
})

//GETTING DATA
app.get("/",(req,res)=>{
    res.send("this is home page");
})


app.get("/users",(req,res)=>{

    res.send("users list here");
})

app.get("/food",(req,res)=>{

    res.send("send food with distance validation and calculation");
})

app.get("/profile/:id", (req, res) => {
  res.send("specific user details");
});

//STORING DATA
//store available food
app.post("/upload/:userId",(req,res)=>{

    res.send("form for uploading")
});

app.post("/rating/:raterId/:donorId",(req,res)=>{

    res.send("put data into db of ratings");
});

app.post("profile/new",async (req,res)=>{
    res.send("add user data into profile prisma")
})


