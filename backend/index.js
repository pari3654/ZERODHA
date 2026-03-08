require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const jwt = require("jsonwebtoken");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const User = require("./models/UserModel");
const { HoldingModel } = require("./models/HoldingModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require('./models/OrderModel');

const app = express();  
app.use(express.json()); 

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://zerodha-omega-lac.vercel.app/",
    "https://zerodha-weld.vercel.app/"
  ],
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//    res.send("Done!");
// });

// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

app.get("/", (req, res) => {
  res.send("Zerodha API running");
});

// Fetch data for holding model 
app.get('/allHoldings', auth , async(req , res) => {
    let allHoldings = await HoldingModel.find({}); // mongodb command to fetch data
    res.json(allHoldings);
});

// Fetch data for Position model 
app.get('/allPositions', auth , async(req , res) => {
    let allHoldings = await PositionsModel.find({}); // mongodb command to fetch data
    res.json(allHoldings);
});


// insert new order and update holdings
app.post('/newOrder', auth , async (req, res) => {

  // destructure data coming from frontend
  const { name, qty, price, mode } = req.body;

  // check if stock already exists in holdings
  let holding = await HoldingModel.findOne({ name });

  // ---------------- BUY LOGIC ----------------
  if(mode === "BUY"){

    // if stock already present in holdings
    if(holding){
      // increase quantity
      holding.qty += Number(qty);

      // update latest price
      holding.price = price;

      // save updated holding
      await holding.save();
    } 
    else{
      // if stock not present, create new holding
      let newHolding = new HoldingModel({
        name,
        qty,
        price
      });

      await newHolding.save();
    }
  }

  // ---------------- SELL LOGIC ----------------
  if(mode === "SELL"){

  let holding = await HoldingModel.findOne({ name });

  // check enough stock
  if(!holding || holding.qty < qty){
    return res.send("Not enough stocks to sell");
  }

  // reduce quantity
  holding.qty -= Number(qty);

  // agar qty 0 ho gayi to delete holding
  if(holding.qty === 0){
    await HoldingModel.deleteOne({ name });
  } 
  else {
    await holding.save();
  }

}
  // Save order history
  let newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode
  });

  // save order in database
  await newOrder.save();

  // send response to frontend
  res.send("Order placed successfully");
});

//------------SIGN UP ROUTE -----------------
app.post("/signup", async (req,res)=>{

 const {email,password} = req.body

 const hashedPassword = await bcrypt.hash(password,10)

 const user = new User({
   email,
   password:hashedPassword
 })

 await user.save()

 res.send("User created");

});

//-------------LOGIN ROUTE ------------------
app.post("/login", async (req,res)=>{

 const {email,password} = req.body

 const user = await User.findOne({email})

 if(!user){
  return res.status(400).send("User not found")
 }

 const isMatch = await bcrypt.compare(password,user.password)

 if(!isMatch){
  return res.status(400).send("Wrong password")
 }

 const token = jwt.sign(
  {userId:user._id},
  "secretkey",
  {expiresIn:"1d"}
 )

 res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  path: "/"
 });

 res.json({message:"Login successful"});

});

 
//auth middleware 
function auth(req, res, next) {

  const token = req.cookies.token;   // cookie se token

  if (!token) {
    return res.status(401).send("No token");
  }

  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } 
  catch (err) {
    return res.status(401).send("Invalid token");
  }
}

// ---------------logout route --------------
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out");
});

// database connection
app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
