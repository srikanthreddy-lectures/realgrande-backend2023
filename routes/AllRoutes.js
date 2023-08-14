const express = require("express");
const {Houses,Enquiries,Users} = require("../models/AllSchemas");
const allrouter = express();
const multer = require('multer')
let getFields=multer()


// to get all houses
allrouter.get("/", async (request, response) => {
  const houses = await Houses.find({});


  try {
    response.send(houses);
  } catch (error) {
    response.status(500).send(error);
  }
});


//to get all county names
allrouter.get("/counties", async (request, response) => {
  const countynames = await Houses.distinct( "county" )
 
  try {
    console.log({countynames})
    response.send(countynames);
  } catch (error) {
    response.status(500).send(error);
  }
});


// to get all houses base on county name
allrouter.get("/searchresults/:county", async (request, response) => {
    const houses = await Houses.find({county:request.params.county});
    try {
      response.send(houses);
    } catch (error) {
      response.status(500).send(error);
    }
});




// to get the house based on id od the house
allrouter.get("/searchHouse/:id", async (request, response) => {
  const house = await Houses.find({_id:request.params.id});
  try {
    response.send(house);
  } catch (error) {
    response.status(500).send(error);
  }
});


allrouter.post("/addEnquiry",getFields.none(), async (req, resp) => {
    try {
        const enquiry = new Enquiries(req.body);
        let result = await enquiry.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("could not store enquiry");
        }
  
  
    } catch (e) {
        resp.status().send(e);
    }
  });
  

  //to get all enquiries 
allrouter.get("/enquiries", async (request, response) => {
    const enquiries = await Enquiries.find({});
   
    try {
      console.log({enquiries})
      response.send(enquiries);
    } catch (error) {
      response.status(500).send(error);
    }
  });

/*
//role as realtor
{
"fname":"Shawn",
"lname":"Kang",
"email":"shawn@procareer.com",
"pass":"Shawn123$",
"role":"realtor"
}
//role as customer
{
"fname":"Bruce",
"lname":"Erlohff",
"email":"bruce@procareer.com",
"pass":"Bruce123$"
}

*/

// to register an user
allrouter.post("/signup",getFields.none(), async (req, resp) => {
    try {
     
      const user = new Users(req.body);
        let result = await user.save();
        result = result.toObject();
            resp.send(req.body);
            console.log(result);
    } catch (e) {
      resp.status(464).send(e);
    }
  });
  
/*

{
  "email":"bruce@procareer.com",
  "pass":"Bruce123$"
}

*/

// to authenticate an user.
allrouter.post("/login",getFields.none(), async (req, resp) => {
    try {
      const result = await Users.findOne({$and:[{email:req.body.email},{pass:req.body.pass}]});
            resp.send(result);
            console.log(result);
    } catch (e) {
      resp.send("Login Failed");
    }
  });
  
module.exports = allrouter;

