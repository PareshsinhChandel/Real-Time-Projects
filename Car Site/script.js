var cur=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blurr")

document.addEventListener("mousemove",function(dets){
cur.style.left=dets.x+"px";
cur.style.top=dets.y+"px";
blur.style.left=dets.x-200+"px";
blur.style.top=dets.y-500+"px";
 }) ;                       //   Here dets function is used to show what functions are happening with mouse on screen while using MouseEvent function

 

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    delay:1,
    height:"90px",
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
         mrkers:true,
         start:"top-20%",
         end:"top-10%",
         scrub:1
    },
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true                This tag will provide start and end at top right corner which will denote start and ending point of the web page
        start:"top-50%",
        end:"top-100%",
        scrub:1
    
    
    },
});


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });