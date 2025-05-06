window.onload = function () {
  // Lenis

  const lenis = new Lenis({ duration: 2, allowNestedScroll: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Experience year

  const joiningDate = new Date("2015-02-01");
  const today = new Date();
  const diffInYears = today.getFullYear() - joiningDate.getFullYear();
  const monthDifference = today.getMonth() - joiningDate.getMonth();
  const yearsOfExperience = monthDifference < 0 ? diffInYears - 1 : diffInYears;
  document.getElementById("experience-years").textContent = yearsOfExperience;

  // Speak

  if ("speechSynthesis" in window) {
    const speakButton = document.getElementById("speak-btn");
    let flag = false;
    let utterance;
    let voices = [];

    function loadVoices() {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            clearInterval(interval);
            resolve(voices);
          }
        }, 100);
      });
    }

    function pickVoice(voice = "male") {
      const soundList = {
        male: ["male", "david", "alex", "mark", "fred"],
        female: ["female", "zira", "samantha", "victoria", "karen"],
      }[voice];

      const match = voices.find((v) =>
        soundList?.some((keyword) => v.name.toLowerCase().includes(keyword))
      );

      return match || voices[0];
    }

    loadVoices().then((loadedVoices) => {
      voices = loadedVoices;

      speakButton.addEventListener("click", () => {
        if (!flag) {
          handleStartSpeak();
        } else {
          handleStopSpeak();
        }
      });
    });

    function handleStartSpeak() {
      flag = true;

      utterance = new SpeechSynthesisUtterance(
        document.querySelector(".canvas").textContent
      );

      // female / male / default: male
      utterance.voice = pickVoice();

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = function () {
        flag = false;
        speakButton.classList.add("stopped");
        speakButton.classList.remove("playing");
      };

      speakButton.classList.add("playing");
      speakButton.classList.remove("stopped");

      speechSynthesis.speak(utterance);
    }

    function handleStopSpeak() {
      if (speechSynthesis.speaking) {
        flag = false;
        speechSynthesis.cancel();
        speakButton.classList.add("stopped");
        speakButton.classList.remove("playing");
      }
    }
  } else {
    console.log("Speech Synthesis not supported.");
  }

  // INFO MODAL

  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  const btn = document.getElementById("info-btn");
  const modalClose = document.getElementsByClassName("modal-close")[0];

  let closeTimeoutId = null;

  const onOpenModal = () => {
    clearTimeout(closeTimeoutId);
    modal.classList.remove("hide");
    modal.classList.add("show");
    backdrop.classList.remove("hide");
    backdrop.classList.add("show");
    modal.style.display = "flex";
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
    lenis.stop();
  };

  const onCloseModal = () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
    backdrop.classList.remove("show");
    backdrop.classList.add("hide");

    closeTimeoutId = setTimeout(() => {
      modal.style.display = "none";
      backdrop.style.display = "none";
      document.body.style.overflow = "";
      lenis.start();
    }, 500);
  };

  btn.onclick = () => onOpenModal();
  modalClose.onclick = () => onCloseModal();

  window.onclick = (event) => {
    if (event.target === modal) {
      onCloseModal();
    }
  };

  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      onCloseModal();
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

  // Scroll to top

  function updateProgressCircle() {
    const progressElement = document.querySelector(".progress-circle-bar");
    const scrollToTopElement = document.querySelector(".scroll-to-top");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      scrollToTopElement.style.opacity = "1";
    } else {
      scrollToTopElement.style.opacity = "0";
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollToTopElement = document.querySelector(".scroll-to-top");
  scrollToTopElement.addEventListener("click", scrollToTop);

  updateProgressCircle();
  window.addEventListener("scroll", updateProgressCircle);
  window.addEventListener("resize", updateProgressCircle);
};
