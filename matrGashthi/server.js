import express from "express";
const app = express();
const port = 3001;

import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
// import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//MIDDLEWARES
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  await prisma.user.findById(id, (err, user) => {
    done(err, user);
  });
});

function verifyToken(req,  res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return  res
      .status(401)
      .json({ success: false, error: "Unauthorized: No token provided" });
  }

  jwt.verify(token, "secret_key", (err, decoded) => {
    if (err) {
      return  res
        .status(401)
        .json({ success: false, error: "Unauthorized: Invalid token" });
    }
    req.user = decoded; // Store decoded user details in request object
    next(); // Proceed to next middleware or route handler
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(cookieParser());  

app.listen(port, () => {
  console.log("server is running");
});

//GETTING DATA
app.get("/", async (req,  res) => {
  return res.send("this is home page");
  
});

app.get("/users", async (req,  res) => {
  let users = await prisma.user.findMany();
  console.log(users);
  return res.send(users);
 
});

app.get("/food", async (req,  res) => {
  let food = await prisma.menu.findMany({
    include: {
      items: true, // Assuming "mees" is the name of the related model
    },
  });

  if (food.length != 0) {
    return res.send(food);
  }
  return res.send("No food Yet :(");
 
});

app.get("/profile/:id", async (req,  res) => {
  const { id } = req.params;
  const tuser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return res.send(tuser);

});

//STORING DATA
//store available food
app.post("/upload/:userId", async (req,  res) => {
  try {
    // Extract data from the request body
    const { description, items } = req.body;
    const userId = req.params.userId;

    // Create the menu and associate it with the user
    const newMenu = await prisma.menu.create({
      data: {
        description,
        userId,
      },
    
    });

    // Create the menu items and associate them with the newly created menu
    await Promise.all(
      items.map(async (item) => {
        const newItem = await prisma.menuItem.create({
          data: {
            name: item.name,
            quantity: item.quantity,
            menu: { connect: { id: newMenu.id } }, // Associate with the newly created menu
          },
        });
        return newItem;
      })
    );

    // Respond with the newly created menu
    return res.status(201).json(newMenu);
     
  } catch (error) {
    console.error("Error uploading menu:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.post("/rating/:raterId/:donorId", (req,  res) => {
  return res.send("put data into db of ratings");
   
});

app.post("/profile/new", async (req,  res) => {
  try {

    const thisuser = await prisma.user.findFirst({where:{email:req.body.email}})
    if(thisuser){
      console.log("user exists brother!")
      return res.send("USER ALREADY EXISTS!")
    }
    const { email, name, password, latitude,longitude } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using Prisma
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword, // Note: You should hash the password before storing it in the database
        latitude,
        longitude,
        role: "user",
      },
    });

     const data = {
      user: {
        id: newUser.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom", { expiresIn: "1h" });
    // console.log(newUser,token);
    res.cookie("Token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    }); 
    let Token = req.cookies.token;
     console.log("cookie");
     console.log(req.cookies.Token);
     console.log("cookie");
    console.log({ success: true, token, cookie: req.cookies });
    return res.json({ success: true, token, cookie: Token });
     
     

    // return res.status(201).json(newUser); 
    // Respond with the newly created user
    // console.log(req.body);

  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// app.post("/signup", async (req,  res) => {
//   try {
//     // Check if a user with the provided email already exists
//     const existingUser = await prisma.user.findFirst({
//       where: { email: req.body.email },
//     });

//     if (existingUser) {
//       return return res.status(400).json({
//         success: false,
//         errors: "Existing user found with the same email address",
//       });
//     }

//     // Create the new user
//     const newUser = await prisma.user.create({
//       data: {
//         name: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       },
//     });

//     // Generate JWT token for the newly created user
//     const data = {
//       user: {
//         id: newUser.id,
//       },
//     };
//     const token = jwt.sign(data, "secret_ecom", { expiresIn: "1h" });

//     return res.json({ success: true, token });
//   } catch (error) {
//     console.error("Error during user signup:", error);
//     return res.status(500).json({ success: false, errors: "Internal Server Error" });
//   }
// });

//creating endpoint for users login
//creating endpoint for users login

app.post("/login", async (req,  res) => {
  try {
    const user = await prisma.user.findFirst({
      where: { name: req.body.username },
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordMatch) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom", { expiresIn: "1h" });
        console.log(token);
         res.cookie("Token", token, {
           httpOnly: true,
           secure: true,
           maxAge: 3600000,
         }); 

         console.log("cookie")
         console.log(req.cookies.Token);
         console.log("cookie");
         console.log(token);
        return res.json({ success: true, token });
     
      } else {
        return res.json({ success: false, errors: "Wrong Password" });
      }
    } else {
      return res.json({ success: false, errors: "Wrong Email Id" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ success: false, errors: "Internal Server Error" });
  }
});

app.get("/protected", verifyToken, (req,  res) => {
  // If token is valid, user is authenticated and authorized
  return res.json({
    success: true,
    message: "Protected route accessed successfully",
  });


});

app.put("/order/:id/:menuID", async (req,  res) => {
  try {
    // Extract data from the request body
    const { id, menuID } = req.params;

    // Create the menu items

    const newOrder = await prisma.order.create({
      data: {
        userId: id,
        menuId: menuID,
        status: "made",
      },
    });

    return res.status(201).json(newOrder);

  } catch (error) {
    console.error("Error Ordering menu:", error);
    return res.status(500).send("Internal Server Error");
  }
});
