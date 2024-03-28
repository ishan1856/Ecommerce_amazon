import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./login";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';


const promise=loadStripe(
  'pk_test_51Ox7w6SIGF67Ijfws6dDBUtags6PeK5OvTZjrV24e8fuTuuIwB9WpZDLqz43YlGCuJCCjKbafo1Xr2QGbF0qbK4v00FBBROAzi'
);

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
//  will only run once when the app component loads
auth.onAuthStateChanged((authUser)=>{
  console.log('The User is >>>>',authUser);

  if(authUser){
    // if user was logged in/just logged in
    dispatch({
      type:'SET_USER',
      user:authUser,
    });

  }
  else{
    // the user is logged out
    dispatch({
      type:'SET_USER',
      user:null,
      
    })
  }
})

  },[dispatch])

  return (
    <Router>
      <div className="App">
    
      <Header />
       
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Elements stripe={promise}>
          <Payment />
          </Elements>
         } />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51Ox7w6SIGF67Ijfw58eP8ELYA2YPDAulDy4TSagGftcPGeqYFQD46HgFXQxfXhOPHMydQdrDPgHDVO4uo4wAqbuk00aCyhIbwy"
// );

// // API

// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// // Example endpoint
// // http://127.0.0.1:5001/clone-c303f/us-central1/api