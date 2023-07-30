var csr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor__blur");
var hover = document.querySelectorAll(".link");
var hover_links = document.querySelectorAll("#footer h3");
var add_link = document.querySelector("#part-4 h4:last-child");
var card = document.querySelectorAll(".card");




add_link.addEventListener("mouseenter",function(){
 csr.style.backgroundColor = "transparent"
 csr.style.height = "100px";
 csr.style.width = "100px";
 csr.style.border = "2px solid white";
 csr.style.transition = "all  0.300s ease-out";
})

add_link.addEventListener("mouseleave",function(){
 csr.style.backgroundColor = "#a9dd19";
 csr.style.height = "20px";
 csr.style.width = "20px";
 csr.style.border = "none";
 csr.style.transition = "height,width,background-color  cubic-bezier( 0.47, 0, 0.745, 0.715 ) 0.1300s"
})

hover_links.forEach(function(el){
 el.addEventListener("mouseenter",function(){
  csr.style.backgroundColor = "transparent"
 csr.style.height = "100px";
 csr.style.width = "100px";
 csr.style.border = "2px solid white";
 csr.style.transition = "all  0.300s ease-out";
 })
})

hover_links.forEach(function(el){
 el.addEventListener("mouseleave",function(){
  csr.style.backgroundColor = "#a9dd19"
 csr.style.height = "20px";
 csr.style.width = "20px";
 csr.style.border = "none";
 csr.style.transition = "height,width,background-color  0.1300s ease"
 })
})




card.forEach(function(el){
 el.addEventListener("mouseenter",function(){
  csr.style.backgroundColor = "transparent"
 csr.style.height = "100px";
 csr.style.width = "100px";
 csr.style.border = "2px solid white";
 csr.style.transition = "all  0.300s ease-out";
 })
})

card.forEach(function(el){
 el.addEventListener("mouseleave",function(){
  csr.style.backgroundColor = "#a9dd19"
 csr.style.height = "20px";
 csr.style.width = "20px";
 csr.style.border = "none";
 csr.style.transition = "height,width,background-color  0.1300s ease-out"
 })
})




hover.forEach(function(el){
 el.addEventListener("mouseenter",function(){
  csr.style.backgroundColor = "transparent"
 csr.style.height = "100px";
 csr.style.width = "100px";
 csr.style.border = "2px solid white";
 csr.style.mixBlend = "difference";
 csr.style.transition = "all  0.300s ease-out";
 })
})

hover.forEach(function(el){
 el.addEventListener("mouseleave",function(){
  csr.style.backgroundColor = "#a9dd19";
 csr.style.height = "20px";
 csr.style.width = "20px";
 csr.style.border = "none";
 csr.style.transition = "height,width,background-color  0.300s cubic-bezier( 0.47, 0, 0.745, 0.715 )"
 })
})



document.addEventListener("mousemove",function (dets){
 //cordinates of mouse when it moves on screen 
 // console.log(dets);
 csr.style.left = dets.x + "px" ;
 csr.style.top = dets.y + "px";
})


document.addEventListener("mousemove",function (dets){
 //cordinates of mouse when it moves on screen 
 // console.log(dets);
 blurr.style.left = dets.x -100 + "px" ;
 blurr.style.top = dets.y -100+ "px";

})

gsap.to("#nav",{
 backgroundColor: "#000",
 duration:0.3,
 height:"100px",
 scrollTrigger:{
  trigger: "#nav",
  // what we are scrolling
  scroller: "body",
  // markers:true,
  start:"top -10%",
  end:"top -11%",
  //repeat if user scrolls up
  //value of scrub can be true or between 1 to 5
  scrub:1,
 }
})



gsap.to("#main",{
 backgroundColor: "#000",
 scrollTrigger:{
  trigger:"#main",
  scroller:"body",
  start:"top -40%",
  end:"top -80%",
  // markers:true,
  scrub:3,
 }
})

gsap.from("#about-us img,#about-us-content",{
 markers:true,
 y :100,
 opacity:0,
 duration:1.5,
 stagger:0.5,
 scrollTrigger:{
  trigger: "#scroller",
  scroller:"body",
  // markers:true,
  start:"top 8%",
  end:"top 4%",
  scrub:2
 }
})

gsap.to("#quotation1",{
 y:20,
 x:25,
 duration:2,
 scrollTrigger:{
  trigger:"#sign-up-page",
  scroll:"body",
  // markers:true,
  start:"top 1%",
  end:"top -10%",
  scrub:2
 }
})

gsap.to("#quotation2",{
 y:-50,
 x:-100,
 duration:2,
 scrollTrigger:{
  trigger:"#sign-up-page",
  scroll:"body",
  // markers:true,
  start:"top 1%",
  end:"top -10%",
  scrub:2
 }
})

gsap.to("#page-4 h1",{
 y:-125,
 duration:1,
 scrollTrigger:{
  trigger:"#page-4 h1",
  scroller:"body",
  scrub:1
 }
})