const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Application demonstration Lambda Authoriser avec Serverless Express",
    headers: req.headers,
  });
});

app.get("/admin", (req, res, next) => {
  return res.status(200).json({
    message: "Application demonstration Lambda Authoriser avec Serverless Express",
    profil: "Admin",
    headers: req.headers,
  });
});

app.get("/read", (req, res, next) => {
  return res.status(200).json({
    message: "Application demonstration Lambda Authoriser avec Serverless Express",
    profil: "Lecteur",
    headers: req.headers,
  });
});

module.exports.handler = serverless(app);
