const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
//process는 전역 프로세스변수임. 모든 파일에서 사용가능하고
//따로 import할 필요가 x
