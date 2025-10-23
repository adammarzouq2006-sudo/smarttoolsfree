document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const userInput = document.getElementById("userInput");
  const result = document.getElementById("result");

  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const desc = userInput.value.trim();
      if (!desc) {
        result.innerHTML = "<p>⚠️ Écris quelque chose d’abord !</p>";
        return;
      }

      const bios = [
        `🌟 ${desc} | Passionné(e) et motivé(e) chaque jour.`,
        `💫 ${desc} | Juste moi, authentique et créatif(ve).`,
        `🔥 ${desc} | Vivant ma meilleure vie, un post à la fois.`,
      ];

      result.innerHTML = bios
        .map(
          (b) =>
            `<div class="bio-item">${b}<br><button class="btn copy-btn" onclick="copyText('${b}')">Copier</button></div>`
        )
        .join("");
    });
  }
});

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Bio copiée !");
}
// --- Faire apparaître les sections en douceur ---
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("header, .tools, .support, footer").forEach((el, index) => {
    el.classList.add("fade-in");
    el.style.animationDelay = `${index * 0.2}s`;
  });
});
