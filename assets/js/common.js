
    $(window).scroll(function(){
        if ( $(window).scrollTop() >=  $(document).height() - $(window).height() - 70){
            $("#downfix").css("bottom","140px");
        }else{
            $("#downfix").css("bottom","0");
        };
    });