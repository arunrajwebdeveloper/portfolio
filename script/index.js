window.onload = function () {
  // SPEACH

  if ("speechSynthesis" in window) {
    const playEle = document.querySelector("#play");
    const pauseEle = document.querySelector("#pause");
    const stopEle = document.querySelector("#stop");
    let flag = false;
    let utterance;
    // let voices = [];

    playEle.addEventListener("click", onClickPlay);
    pauseEle.addEventListener("click", onClickPause);
    stopEle.addEventListener("click", onClickStop);

    // window.speechSynthesis.onvoiceschanged = () => {
    //   voices = speechSynthesis.getVoices();
    // };

    function onClickPlay() {
      if (!flag) {
        flag = true;
        utterance = new SpeechSynthesisUtterance(
          document.querySelector(".canvas").textContent
        );

        // utterance.voice = speechSynthesis.getVoices()[4]; // female voice
        utterance.voice = speechSynthesis.getVoices()[6]; // male voice

        //utterance.voice = voices.find((v) => v.name.includes("Female")) || voices[0];
        utterance.rate = 1; // Speed of speech
        utterance.pitch = 1; // Pitch of speech
        utterance.volume = 1; // Volume of speech
        utterance.onend = function () {
          flag = false;
          playEle.className = pauseEle.className = "";
          stopEle.className = "stopped";
        };
        playEle.className = "played";
        stopEle.className = "";
        speechSynthesis.speak(utterance);
      }
      if (speechSynthesis.paused) {
        playEle.className = "played";
        pauseEle.className = "";
        speechSynthesis.resume();
      }
    }

    function onClickPause() {
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        pauseEle.className = "paused";
        playEle.className = "";
        speechSynthesis.pause();
      }
    }

    function onClickStop() {
      if (speechSynthesis.speaking) {
        stopEle.className = "stopped";
        playEle.className = pauseEle.className = "";
        flag = false;
        speechSynthesis.cancel();
      }
    }
  } else {
    console.log("Detected no support for Speech Synthesis");
  }

  // INFO MODAL
};
