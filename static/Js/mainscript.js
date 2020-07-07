function getRandomInt(max) {
    var plusOrMinus  = Math.random() < 0.5 ? -Math.random() : Math.random();
    return Math.floor(plusOrMinus * Math.floor(max) );
}

gsap.from('.isDone',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130) , rotation:getRandomInt(45)} )
gsap.from('.isNotDone',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(45) } )
gsap.from('#T',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#o1',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#D',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#o2',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#T1',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#o3',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#D1',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#o4',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#line',{opacity:0, x:getRandomInt(130) , y:getRandomInt(130), rotation:getRandomInt(180) } )
gsap.from('#S',{opacity:0, x:-getRandomInt(130) , y:-getRandomInt(130), rotation:getRandomInt(180) } )
