function openGift() {

    // 🎵 Putar musik saat gift diklik
    const music = document.getElementById("music");

    music.volume = 0.6;

    music.play();


    const lid = document.getElementById("lid");
    const home = document.getElementById("home");
    const letterPage = document.getElementById("letterPage");
    const bow = document.querySelector(".bow");


    // Buka tutup gift
    lid.style.transform =
        "translateY(-85px) rotate(-8deg)";

    bow.style.transform =
        "translateX(-50%) translateY(-85px) rotate(-10deg)";

    bow.style.opacity = "0";


    // Bunga
    const flowers = [
        "🌹", "🌸", "🌷", "🌺", "💐",
        "🌹", "🌸", "🌷", "🌺", "🌹"
    ];


    flowers.forEach((flower, i) => {

        const el = document.createElement("div");

        el.className = "flower";
        el.textContent = flower;


        const x =
            (Math.random() * 90 - 45) + "vw";

        const y =
            (-20 - Math.random() * 65) + "vh";

        const s =
            (0.7 + Math.random() * 1.4).toFixed(2);

        const r =
            (Math.random() * 720 - 360).toFixed(0) + "deg";


        el.style.left = "50%";
        el.style.top = "50%";

        el.style.setProperty("--x", x);
        el.style.setProperty("--y", y);
        el.style.setProperty("--s", s);
        el.style.setProperty("--r", r);

        el.style.animationDelay =
            (i * 0.08) + "s";


        document.body.appendChild(el);

    });


    // Tampilkan surat
    setTimeout(() => {

        home.style.display = "none";

        letterPage.classList.add("show");

    }, 1800);

}