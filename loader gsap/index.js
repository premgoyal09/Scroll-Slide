// var tl =gsap.timeline()


// function time(){
//     var a=  0;
//     setInterval(function(){
//         a= a + Math.floor(Math.random()*20)
//         if (a<100){
//             document.querySelector("#loader h1").innerHTML=a+"%"
//         }
//         else {
//             a = 100
//             document.querySelector("#loader h1").innerHTML = a+"%"
//         }
//         document.querySelector("#loader h1").innerHTML=a+"%"
//         console.log(a)
//     },150)
// }
// time()



tl.to("#loader h1", {
    scale:1.5,   
    delay:0.5,
    duration:1,
    onStart:time()
})

gsap.to("#loader", {
    top:"-100vh",
    delay:2,
    duration:2.5,
})









// gsap.to("#page1 h1",{
//     transform:"translateX(-100%)",
//     fontWeight:"100",
//     scrollTrigger: {
//         trigger:"#page1",
//         scroller:"body",
//         markers:true,
//         start:"top 0",
//         markers:true,
//         start:"top 0",
//         end:"top -200%",
//         scrub:2,
//         pin:true
//     }
// })

