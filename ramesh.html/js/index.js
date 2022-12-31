jQuery(document).ready(function(){
    $('header').ripples({
dropRadius: 10,
perturbance:0.0003,

});
  });


  let animate = new Typed('#ani',{
    strings:[ " WEB DEVELOPER","Front End Developer","Back End Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
  })

  // ------------------- about ----------------- 
  let animat = new Typed('#ani2',{
    strings:["Front End Developer","Back End Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
  })

  AOS.init({
    offset: 300, 
    duration: 500,
  });
 

  