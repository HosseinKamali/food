const sections = document.querySelectorAll("section");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        

        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animation");
        } else {
            sec.classList.remove("show-animation");
        }
    });
};


