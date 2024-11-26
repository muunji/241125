// if(request.method === "GET"){
//   if(request.url === '/') {
//     response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
//     response.write("스테이터스 코드 200 입니다.");
//     response.end();
//   }
// } 

export default function getResponse(url,response) {
  if(url==='/') {
    response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
    response.write("스테이터스 코드 200 입니다.");
    response.end();
  }
}

//클래스로 만들어주고 싶다