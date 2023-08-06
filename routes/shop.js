const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //__dirname은? 우리 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해 주는 전역 변수임.
  //__dirname은 routes 폴더를 가리킴. 띠리사 '../'기 필요
  //path.join을 사용하는 이유는? 자동으로 리눅스와 윈도우 시스템 모두에서 작동하는 방식으로
  //경로를 생성해 주기 때문임.
});

module.exports = router;
