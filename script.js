const startButton = document.getElementById("startBtn");const outputDiv = document.getElementById("output");

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
   const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
  };

  startButton.onclick = () => {
    recognition.start();
  };
} else {
  alert("Speech recognition not supported");
}
