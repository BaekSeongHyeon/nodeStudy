const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
}); //도달하려는 dadmin.js파일은 앞에 /admin이 있는 요청을 통해서만 접근할 수 있기 때문에
//form action='/admin/add-product'이 형식을 지켜야

router.post("/add-product", (req, res) => {
  console.log("hh");
  console.log(req.body); //콘솔 결과가 undefined인 이유는?
  //req는 기본적으로 들어오는 요청의 본문을 분석하려하지 않음.
  //분석하려면 분석기를 등록해야 하는데 이는 또다른 미들웨어를 추가해서 구현해야함.

  res.redirect("/");
});

module.exports = router;
