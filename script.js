
gsap.timeline({
    scrollTrigger: {
        trigger: '.scroll',
        start: 'top top', 
        end: '+=10000 bottom',
        scrub: .5,
        pin: true,
        snap: {
            snapTo: [.2, .4, .6, .8],
            delay: 0,
            duration: {
                min: .2,
                max: .5,
            }
        },
    }
})
    // .to('.c4', {scale: 1.0, duration: .1, opacity: 1, filter: 'blur(0px)'}, 0)
    .to('.c3', {scale: .8, duration: .1, opacity: 1,filter: 'blur(4px)'}, 0)
    .to('.c2', {scale: .7, duration: .1, filter: 'blur(8px)'}, 0)
    .to('.c1', {scale: .6, duration: .1, filter: 'blur(12px)'}, 0)

    .to('.c3', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .1)
    .to('.c2', {scale: .8, duration: .1, opacity: 1,filter: 'blur(4px)'}, .1)
    .to('.c1', {scale: .7, duration: .1, filter: 'blur(8px)'}, .1)

    .to('.c2', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .2)
    .to('.c1', {scale: .8, duration: .1, opacity: 1, filter: 'blur(4px)'}, .2)

    .to('.c1', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .3)

    .to('.c4', {scale: 3, left: '0', opacity: 0, duration: .1}, .1)
    .to('.c3', {scale: 3, left: '100%', opacity: 0, duration: .1}, .2)
    .to('.c2', {scale: 3, left: '0', opacity: 0, duration: .1}, .3)
    .to('.c1', {scale: 3, left: '100%', opacity: 0, duration: .1}, .4)


//     .to('.c3', {scale: 1, filter: 'blur(0px)', rotateY: '30deg', skewX: '10deg', perspective: '5000px'}, 0)
//     .to('.c3', {opacity: 0, scale: 1.5, left: '0px'}, .5)
//     .to('.c4', {scale: 1}, .2);
