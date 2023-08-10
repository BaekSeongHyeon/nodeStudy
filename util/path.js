const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
//process는 전역 프로세스변수임. 모든 파일에서 사용가능하고
//따로 import할 필요가 x
//filename을 호출해서 이 모듈이 어떤 파일에서 시작 되었는지 알 수 있다
//즉 process.mainModule.filename 이 코드는 우리 앱이 실행될 수 있도록 해주는
//파일의 경로를 알려줌
