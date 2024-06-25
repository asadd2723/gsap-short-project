function pageone(){
  var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button ",{
  y:-30,
  duration:0.4,
  delay:0.4,
  opacity:0,
  stagger:0.14
})
tl.from(".center-part1 h1",{
  x:-300,
  duration:0.4,
  opacity:0
})
tl.from(".center-part1 p",{
  x:-100,
  duration:0.3,
  opacity:0
})
tl.from(".center-part1 button",{
  duration:0.25,
  opacity:0
})
tl.from(".center-part2 img",{
  duration:0.35,
  opacity:0,
  x:100
},"-=0.8")

tl.from(".section1bottom img",{
  opacity:0,
  y:30,
  stagger:0.1,
  duration:0.2
})

}
pageone()
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    start:"top 40%",
    scrub:2,
    end:"top -40%"
  }
})

tl2.from(".services",{
  x:100,
  opacity:0,
  duration:0.3,
})

tl2.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:0.5,
},"aim")
tl2.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration:0.5,
},"aim")
tl2.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration:0.5,
},"aim1")
tl2.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration:0.5,
},"aim1")
