const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  let progress = 0;

  // Disable button while downloading
  startBtn.disabled = true;
  startBtn.textContent = "Downloading...";

  // Timer to simulate download progress
  const interval = setInterval(() => {
    progress += 2; // Increase by 2% each step

    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      startBtn.textContent = "Download Complete";
    }
  }, 100); // runs every 100ms
});
