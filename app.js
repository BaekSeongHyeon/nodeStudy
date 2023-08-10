const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//미들웨어란?
//클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하려는 중간(미들)에
//목적에 맞게 처리를 하는, 말하자면 거쳐가는 함수들이라고 보면 됨.
//미들웨어 함수는 req(요청)객체와 res(응답)객체, 그리고 어플리케이션
//요청-응답 사이클도중 그 다음의 미들 웨어 함수에 대한 엑세스 권한을 갖는 함수다.

app.set("view engine", "pug"); //pug를 기본 템플릿 엔진으로 정의했음.
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); //본문 분석기

app.use(express.static(path.join(__dirname, "public"))); //static안에는 정적으로 서비스하기 원하는 폴더 경로를 입력

app.use("/admin", adminData.routes); // /admin으로 시작하는 라우트만 adminRoutes파일로 들어가게 됨.

//get함수는 use함수와 동일한 사용법으로 사용
//get함수는 경로를 사용하거나 사용하지 않을 수 있고
//들어오는 GET요청에만 작동한다.
//즉 아래 app.get("/product", (req, res) => 의 의미는
///product걍로로 GET요청이 들어오는 경우만 실행한다는 뜻.
//그러면 app.post는 POST요청이 들어오는 경우만 실행한다는 뜻,

app.use(shopRoutes);
// const server = http.createServer(app);
// server.listen(3000);
//21, 22줄을 합쳐서

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views", "404.html"));
});
app.listen(3000); //이렇게 간략히 구성하기도 함.
