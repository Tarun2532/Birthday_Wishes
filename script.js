/* 🎵 GLOBAL PERSISTENT MUSIC SYSTEM */

if (!localStorage.getItem("musicPlaying")) {
    localStorage.setItem("musicPlaying", "false");
}

let music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.5;

/* Restore playback position */
if (localStorage.getItem("musicTime")) {
    music.currentTime = parseFloat(localStorage.getItem("musicTime"));
}

/* Save current time continuously */
setInterval(() => {
    if (!music.paused) {
        localStorage.setItem("musicTime", music.currentTime);
    }
}, 1000);

/* Start music after first interaction */
function startMusicOnce() {
    if (localStorage.getItem("musicPlaying") === "false") {
        music.play().then(() => {
            localStorage.setItem("musicPlaying", "true");
        }).catch(() => {});
    }
}

document.addEventListener("click", startMusicOnce, { once: true });



/* 🎬 CINEMATIC INTRO */

const cursor = document.querySelector('.cursor');

if(cursor){
    document.addEventListener('mousemove', (e)=>{
        gsap.to(cursor,{
            x:e.clientX,
            y:e.clientY,
            duration:0.2
        });
    });
}

const tl = gsap.timeline();

if(document.querySelector(".intro-line")){
    tl.to(".intro-line",{
        opacity:1,
        y:-20,
        duration:1,
        stagger:1
    })
    .to(".intro-title",{
        opacity:1,
        scale:1.1,
        duration:1.5,
        ease:"power3.out"
    })
    .to(".cta-button",{
        opacity:1,
        y:-10,
        duration:1,
        ease:"back.out(1.7)"
    });
}


/* Floating particles */

const floating = ["💖","✨","🌸","💫","💕"];

function createFloating(){
    const el = document.createElement("div");
    el.className="floating";
    el.innerText = floating[Math.floor(Math.random()*floating.length)];

    el.style.left = Math.random()*100+"vw";
    el.style.top = "100vh";
    el.style.fontSize = (20+Math.random()*20)+"px";

    document.body.appendChild(el);

    gsap.to(el,{
        y:-window.innerHeight-200,
        x:Math.random()*200-100,
        duration:8,
        rotation:360,
        onComplete:()=>el.remove()
    });
}

setInterval(createFloating,800);


/* 🚀 Page Transitions */

const btn = document.querySelector(".cta-button");

if(btn){
    btn.addEventListener("click",()=>{
        gsap.to("body",{
            opacity:0,
            duration:1,
            onComplete:()=>{
                window.location.href="cause.html";
            }
        });
    });
}