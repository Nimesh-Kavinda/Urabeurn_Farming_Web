function playVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    }
}

const headings = document.querySelectorAll(".animate");

headings.forEach(heading => {
  
    heading.innerHTML = heading.textContent
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(heading.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
    })
    .to(heading.querySelectorAll("span"), {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.in",
        delay: 1,
    });
});

const headings_video = document.querySelectorAll(".animate_1");

headings_video.forEach(heading => {
    // Wrap each letter in a <span>
    heading.innerHTML = heading.textContent
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

    // Create animation timeline for each heading
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
                amount: 1, // Total time for all letters
                from: "random" // Random letter animation order
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
