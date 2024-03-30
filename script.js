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

navAnimation();