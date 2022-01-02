$(document).on("click",".accordion-header",function(){
  if($(".accordion-header").next().slideUp()&& $(this).next().hasClass("notshow")){
    $(this).next().removeClass("notshow");
    $(this).next().slideDown();
  }else {
    $(this).next().addClass("notshow");
    $(this).next().slideUp();
}

})

