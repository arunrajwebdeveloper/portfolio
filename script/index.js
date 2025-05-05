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

  var modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  var btn = document.getElementById("info-btn");
  var modalClose = document.getElementsByClassName("modal-close")[0];

  const onOpenModal = () => {
    modal.style.display = "flex";
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const onCloseModal = () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
    document.body.style.overflow = "";
  };

  btn.onclick = () => {
    onOpenModal();
  };

  modalClose.onclick = () => {
    onCloseModal();
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      onCloseModal();
    }
  };

  document.onkeydown = (e) => {
    switch (e.key) {
      case "Escape":
        onCloseModal();
        break;
      default:
        return;
    }
  };

  // Cursor

  const CURSOR_DOT_OUTLINE = document.querySelector(".cursor-element");

  let x = 0,
    y = 0;
  let endX = 0,
    endY = 0;

  const animateDotOutline = () => {
    x += (endX - x) / 8;
    y += (endY - y) / 8;
    CURSOR_DOT_OUTLINE.style.top = y + "px";
    CURSOR_DOT_OUTLINE.style.left = x + "px";

    requestAnimationFrame(animateDotOutline);
  };

  animateDotOutline();

  document.addEventListener("mousemove", (e) => {
    endX = e.clientX - CURSOR_DOT_OUTLINE.offsetWidth / 2;
    endY = e.clientY - CURSOR_DOT_OUTLINE.offsetHeight / 2;
  });

  document.querySelectorAll("a, button").forEach((interactiveElement) => {
    interactiveElement.addEventListener("mouseenter", () => {
      CURSOR_DOT_OUTLINE.classList.add("hover");
    });

    interactiveElement.addEventListener("mouseleave", () => {
      CURSOR_DOT_OUTLINE.classList.remove("hover");
    });
  });

  // Theme

  const THEME_BUTTONS = document.querySelectorAll(".action__theme");
  const DEFAULT_THEME = "light";
  const SAVED_THEME = localStorage.getItem("portflio-theme") || DEFAULT_THEME;

  document.body.setAttribute("data-theme", SAVED_THEME);
  highlightActiveButton(SAVED_THEME);

  THEME_BUTTONS.forEach((button) => {
    button.addEventListener("click", () => {
      const SELECTED_THEME = button.getAttribute("data-theme");
      document.body.setAttribute("data-theme", SELECTED_THEME);
      localStorage.setItem("portflio-theme", SELECTED_THEME);
      highlightActiveButton(SELECTED_THEME);
    });
  });

  function highlightActiveButton(theme) {
    THEME_BUTTONS.forEach((button) => {
      if (button.getAttribute("data-theme") === theme) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }
};
