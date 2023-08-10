const path = require("path");

const express = require("express");

const rootDir = require("../util/path"); //루트 디렉토리 경로를 구축하는 깔금한 방식

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
}); //도달하려는 dadmin.js파일은 앞에 /admin이 있는 요청을 통해서만 접근할 수 있기 때문에
//form action='/admin/add-product'이 형식을 지켜야

router.post("/add-product", (req, res) => {
  //req는 기본적으로 들어오는 요청의 본문을 분석하려하지 않음.
  //분석하려면 분석기를 등록해야 하는데 이는 또다른 미들웨어를 추가해서 구현해야함.
  products.push({ title: req.body.title });
  res.redirect("/");
});

//module.exports = router;
exports.routes = router;
exports.products = products;
