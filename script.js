function locomotiveAnimation(){
      
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function navAnimation(){
    var nav = document.querySelector(".nav-items");

        nav.addEventListener("mouseenter" , function(){
            let tl = gsap.timeline();

            tl.to("#nav-bottom" , {
                height:"25vh"
            })
            tl.to(".nav-items h5" , {
                display : "block"
            })
            tl.to(".nav-items h5 span" , {
                y:0 , 
                stagger : {
                    amount : 0.5
                }
            })
        })

        nav.addEventListener("mouseleave" , function(){
            let tl = gsap.timeline();

            tl.to(".nav-items h5 span" , {
                y:25, 
                stagger : {
                    amount : 0.2
                }
            })
            tl.to(".nav-items h5" , {
                display :"none",
                duration : 0.1
            })
            tl.to("#nav-bottom" , {
                height : 0,
                duration : 0.2
            })
        })
}

function movingImage(){
    
    var rightElem = document.querySelectorAll(".right-elem");

        rightElem.forEach((elem) => {
            elem.addEventListener("mouseenter" , function(){
            
                gsap.to(elem.childNodes[3] , {
                opacity : 1 , 
                scale : 2
            })
            })
            elem.addEventListener("mouseleave" , function(){
                gsap.to(elem.childNodes[3] , {
                    opacity : 0 , 
                    scale : 0
                })
            })
            elem.addEventListener("mousemove" , function(dets){
                
                gsap.to(elem.childNodes[3] , {
                    x : dets.x - elem.getBoundingClientRect().x,
                    y : dets.y - elem.getBoundingClientRect().y-90
                })
            })
        })
}

function videoAnimation(){
    var page3Play = document.querySelector("#page3-play");
    var video = document.querySelector("#page3 video");
    
        page3Play.addEventListener("click" , function(){
            video.play();
            gsap.to(video , {
                transform : "scaleX(1) scaleY(1)",
                opacity : 1 ,
                borderRadius : 0 , 
                ease : Power2
            })
        })

        video.addEventListener("click" , function(){
            video.pause();
            gsap.to(video , {
                transform : "scaleX(0.7) scaleY(0)",
                opacity : 0 ,
                borderRadius : "30px",
                ease : Power2
            })
        })
}

function hoverVideo(){
    var sectionRight = document.querySelector(".section-right");
    var video = document.querySelector(".section-right video");

    sectionRight.addEventListener("mouseenter" , function(){
        video.play();
        gsap.to(video , {
            opacity : 1
        })
    })

    sectionRight.addEventListener("mouseleave" , function(){
        video.load();
        gsap.to(video , {
        opacity : 0
        })
    })

}

function movingPage6(){
    
    gsap.to("#btm-part2 h4" , {
        x:100,
        duration:1,
        stagger : {
            amount : -1
        },
        scrollTrigger : {
            trigger : "#btm-part2",
            scroller : "#main",
            start : "top 80%",
            end : "top 0%",
            scrub : 2
        }
    })
    gsap.to("#btm-part3 h4" , {
        x:100,
        duration:1,
        stagger : {
            amount : -1
        },
        scrollTrigger : {
            trigger : "#btm-part2",
            scroller : "#main",
            start : "top 80%",
            end : "top 0%",
            scrub : 2
        }
    })
    gsap.to("#btm-part4 h4" , {
        x:100,
        duration:1,
        stagger : {
            amount : -1
        },
        scrollTrigger : {
            trigger : "#btm-part2",
            scroller : "#main",
            start : "top 80%",
            end : "top 0%",
            scrub : 2
        }
    })
}

function loadingAnimation(){

    var tl = gsap.timeline()

    tl.from("#page1" , {
        opacity : 0
    })
    tl.from("#page1" , {
        transform : "scaleX(0.7) scaleY(0.2)",
        borderRadius : "50px",
        ease : "expo.out",
        duration : 2
    })
    tl.from("nav" , {
         opacity : 0
    })
    tl.from("#page1 p , #page1 div" , {
        opacity : 0,
        duration : 0.5,
        stagger : 0.2
    })
    tl.from("#page1 h1" , {
        y:100,
        stagger:0.1,
        opacity :0
    })
}


locomotiveAnimation();
navAnimation();
movingImage();
videoAnimation();
hoverVideo();
movingPage6();
loadingAnimation();


