const express= require('express');
const app = express();
const port =3001;
const passport = require("passport");
const LocalStrategy=require('passport-local').Strategy;
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require('cors');
 const User = "from prisma";

 //MIDDLEWARES
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, done) {
   
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

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

        app.post(
          "/login",
          passport.authenticate("local", {
            successRedirect: "http://localhost:5174/food",
            failureRedirect: "http://localhost:5174/login",
            failureFlash: true,
          })
        );


