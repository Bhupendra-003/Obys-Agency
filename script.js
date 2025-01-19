function loadingAnimation() {
    var h5timer = document.querySelector('#prog1');
    var grow = 0;
    gsap.from('#line1-part1', {
        delay: 1,
        opacity: 0,
        onStart: function () {
            if (grow <= 100) {
                setInterval(function () {
                    if (grow <= 100) {
                        h5timer.innerHTML = grow;
                    }
                    grow++;
                }, 25)
            }
        }
    })

    //Debug
    document.querySelector('#loader').style.display = 'none'

    var tl = gsap.timeline();
    // tl.from('.line h1', {
    //     y: 130,
    //     stagger: 0.3,
    //     duration: 0.6,
    //     delay: 0.5,
    // })
    // tl.to('.line h2', {
    //     animationName: 'anime',
    //     opacity: 1,
    // })
    //     .from('#loader-msg', {
    //         opacity: 0,
    //     }, "<")
    // tl.to('.line', {
    //     opacity: 0,
    //     stagger: 0.2,  // Controls delay between each line
    //     duration: 0.6,
    //     delay: 2,
    //     onComplete: function () {
    //         document.querySelector('#loader').style.opacity = 0;
    //         document.querySelector('#loader').style.display = 'none';
    //     }
    // })
    tl.from('#page1', {
        y: 1200,
        delay: 0.2,
        opacity: 0,
    })
    .from('.hero h1, .hero3-cont', {
        y: 130,
        delay: 0.5,
        stagger: 0.2,
    }, '<')
}
document.querySelector('#crsr').style.display = 'none';
function cursor(){
    document.addEventListener('mousemove', (dets) => {
        document.querySelector('#crsr').style.display = 'block';
        gsap.to('#crsr', {
            left: dets.x,
            top: dets.y,
        })
    })
}

loadingAnimation();
cursor()
Shery.makeMagnet("#nav-part2 h4, .menu-opener__square", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
