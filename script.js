var h5timer = document.querySelector('#prog1');
var grow = 0;


var tl = gsap.timeline();
tl.from('.line h1', {
    y: 130,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
})
tl.from('#line1-part1, .line h2',{
    opacity: 0,
    onStart: function(){
        if(grow<=100){
            setInterval(function(){
                if(grow<=100){
                    h5timer.innerHTML = grow;
                }
                grow++;
            }, 25)
        }
    }
})
tl.from('#loader-msg', {
    opacity: 0,
})
tl.to('#loader', {
    opacity: 0,
    duration: 0.4,
    delay: 3,
})
tl.from('#page1', {
    y: 1200,
    delay: 0.2,
    opacity: 0,
})