/* global $ */

$(document).ready(function(){
    setTimeout(function(){
        $(".square").addClass("animate");
        $(".infographic").addClass("reduce-opacity");
        setTimeout(function(){
            $(".square").removeClass("reduce-opacity");
            $(".square").removeClass("animate");
            $(".infographic").removeClass("reduce-opacity");
        },500);
    },500);
    
    $(document).on("mouseover",".square",function(event){
       $(".square").not(this).addClass("reduce-opacity");
       $(".infographic").addClass("reduce-opacity");
    });
    
    $(document).on("mouseout",".square",function(event){
       $(".square:not("+this+")").removeClass("reduce-opacity");
       $(".infographic").removeClass("reduce-opacity");
    });
    
});