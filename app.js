const express = require("express");

const app = express();

//미들웨어란?
//클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하려는 중간(미들)에
//목적에 맞게 처리를 하는, 말하자면 거쳐가는 함수들이라고 보면 됨.
//미들웨어 함수는 req(요청)객체와 res(응답)객체, 그리고 어플리케이션
//요청-응답 사이클도중 그 다음의 미들 웨어 함수에 대한 엑세스 권한을 갖는 함수다.
app.use("/", (req, res, next) => {
  console.log("this is always runs!");
  res.next();
});
app.use("/add-product", (req, res, next) => {
  console.log("미애");
  res.send(
    "<form action='product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
  );
});
app.use("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("in another middleware@");
  res.send('<h1>hello from express!</h1>');
});
// const server = http.createServer(app);
// server.listen(3000);
//21, 22줄을 합쳐서
app.listen(3000); //이렇게 간략히 구성하기도 함.
