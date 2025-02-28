function playVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    }
}

const headings = document.querySelectorAll(".animate");

headings.forEach(heading => {
    // Wrap each letter in a <span>
    heading.innerHTML = heading.textContent
        .split("")
        .map(letter => `<span>${letter}</span>`)
        .join("");

    // Create animation timeline for each heading
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