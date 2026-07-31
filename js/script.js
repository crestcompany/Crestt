const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const isPercent = counter.classList.contains("percent");

    let count = 0;
    const speed = 520; // كلما زاد الرقم أصبح العد أبطأ

    const updateCounter = () => {
        const increment = Math.max(1, Math.ceil(target / speed));

        if (count < target) {
            count += increment;

            if (count > target) count = target;

            counter.innerText = count.toLocaleString() + (isPercent ? "%" : "");

            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
});
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});