setTimeout(function(){
  console.log("3초뒤");
  setTimeout(function(){
    console.log("1초뒤");
  },1000);
},3000);

