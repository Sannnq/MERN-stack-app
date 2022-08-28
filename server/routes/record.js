const express = require("express");
const recordRoutes = express.Router();
 
const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("simple_data");
 db_connect
   .collection("sample_data")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
     console.log("results succelfully get");
   });
});
module.exports=recordRoutes;