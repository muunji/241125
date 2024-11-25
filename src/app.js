import http from 'http';

import fs from 'fs';
import path from 'path';
//--------------------------
import getResponse from './serve/get-response.js';


const server = http.createServer(function(request,response){
  // console.dir(request);
  if(request.url === "GET"){
    getResponse(request.url, response);
  }

});

server.listen(3010,function(){
  console.log("http://localhost:3010")
});