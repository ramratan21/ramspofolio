
let isClicked = true;
function isClick() {
    return isClicked= isClicked == false? true:false;
}
document.getElementById("menu-icon").onclick = () => {
    isClick();
    document.getElementById("menu-icon").src = isClicked == true ? "./res/drop-down.png":"./res/cross.png";
    if(!isClicked){
        gsap.fromTo('#dropdown', {x: '-100%', opacity: 0}, {duration: 1, x: '100%', opacity: 1})
    }else{
        gsap.fromTo('#dropdown', { x: '100%', opacity: 1 }, { duration: 1, x: '-100%', opacity: 0})
    }
}

gsap.fromTo('#welcome', { x: '-100%', opacity: 0 }, { duration: 2, x: '0', opacity: 1, delay: 0 })
gsap.fromTo('#intro', { x: '-100%', opacity: 0 }, { duration: 2, x: '0', opacity: 1, delay: 2 })
gsap.fromTo('#comment', { x: '-100%', opacity: 0 }, { duration: 2, x: '0', opacity: 1, delay: 4 })

gsap.from("#mobile-view", { 
    ScrollTrigger: "#mobile-view",
    y:500,
    duration: 2
})