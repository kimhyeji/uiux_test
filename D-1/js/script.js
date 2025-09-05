$(document).ready(function(){
  $('.navi>li').mouseover(function(){
	  $(this).find('.subMenu').stop().slideDown(500);
  }).mouseout(function(){
	  $(this).find('.subMenu').stop().slideUp(500);
  });

  const imgs = 2;
  let now = 0;

  $(".imgSlide>a").eq(0).siblings().animate({marginTop:"-400px"});

  setInterval(function(){
      now = now==imgs ? 0 : now+=1;
      $(".imgSlide>a").eq(now-1).animate({marginTop:"-400px"});
      $(".imgSlide>a").eq(now).animate({marginTop:"0"});
  },3000);
   
  $(".notice li:first").click(function(){
	   $("#modalWrap").addClass("active");
  });
    $(".btn").click(function(){
	$("#modalWrap").removeClass("active");
  });

});