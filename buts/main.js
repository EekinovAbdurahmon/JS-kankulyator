$(document).ready(function () {
    var a="";
    var b="";
    var c="";
    var boolean=0;
    $(".num").click(function () {
      a+=$(this).html();
      $("#inner").text(a);
    })
    $("#plus").click(function () {
      b=a;
      a=""
      boolean=1;
    })
    $(".ayir").click(function () {
      b=a;
      a=""
      boolean=2;
    })
    $(".Mk").click(function () {
      b=a;
      a=""
      boolean=3;
    })
    $(".Mb").click(function () {
      b=a;
      a=""
      boolean=4;
    })
    $(".M-ac").click(function () { 
     $("#inner").text("");
     c=""
     a=c
    })
    $(".teng").click(function () {
      if (boolean===1) {
        $("#inner").text(c=parseFloat(a)+parseFloat(b))
      }else if(boolean===2){
        $("#inner").text(c=parseFloat(b)-parseFloat(a))
      }else if(boolean===3){
        $("#inner").text(c=parseFloat(a)*parseFloat(b))
      }else if(boolean===4){
        $("#inner").text(c=parseFloat(b)/parseFloat(a))
      }
      a=c
    })

    

  });

 
  