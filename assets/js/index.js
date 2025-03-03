function playVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    }
}

const headings_video = document.querySelectorAll(".animate_1");

headings_video.forEach(heading => {

    heading.innerHTML = heading.textContent
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

  
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(heading.querySelectorAll("span"), 
        {
            opacity: 0,
            y: 50,
            scale: 0.5,
            rotationX: 90
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            color: "hsl(165, 48%, 42%)",
            duration: 1,
            stagger: {
                amount: 1, 
                from: "random" 
            },
            ease: "elastic.out(1, 0.5)"
        }
    )
    .to(heading.querySelectorAll("span"), {
        opacity: 0,
        y: -30,
        scale: 1.5,
        rotationY: 180,
        color: "hsl(50, 100%, 60%)",
        duration: 1,
        stagger: {
            amount: 1,
            from: "random"
        },
        ease: "power2.inOut",
        delay: 1
    });
});
