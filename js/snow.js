document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector(".snowflakes");

    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
        snowflakesContainer.appendChild(snowflake);
    }
});
