'use strict';

function rollOut() {
  $(".sideNavBar").animate({
      left: 0
  }, 500)


  $(".OCicon").removeClass("fa-align-justify");
  $(".OCicon").addClass("fa-x");


  for (let i = 0; i < 5; i++) {
      $(".navLinks li").eq(i).animate({
          top: 0
      }, (i + 5) * 100)
  }
}

function rollIn() {
  let boxWidth = $(".sideNavBar .navTabs").outerWidth()
  $(".sideNavBar").animate({
      left: -boxWidth
  }, 500)

  $(".OCicon").addClass("fa-align-justify");
  $(".OCicon").removeClass("fa-x");


  $(".navLinks li").animate({
      top: 300
  }, 400)
}

rollIn()
$(".sideNavBar i.OCicon").click(() => {
  if ($(".sideNavBar").css("left") == "0px") {
      rollIn()
  } else {
      rollOut()
  }
})

$(Search).click(function () { 
  goToSearch(); rollIn()
  
});

$(Categorise).click(function () { 
  getCategories(); rollIn()
  
});

$(Area).click(function () { 
  getArea(); rollIn()
  
});

$(Ingredients).click(function () { 
  getIngredients(); rollIn()
  
});

$(Contact).click(function () { 
  getContactInfo(); rollIn()
  
});