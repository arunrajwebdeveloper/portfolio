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

  // if ("speechSynthesis" in window) {
  //   const speakButton = document.getElementById("speak-btn");
  //   let flag = false;
  //   let utterance;
  //   let voices = [];

  //   function loadVoices() {
  //     return new Promise((resolve) => {
  //       const interval = setInterval(() => {
  //         voices = speechSynthesis.getVoices();
  //         if (voices.length > 0) {
  //           clearInterval(interval);
  //           resolve(voices);
  //         }
  //       }, 100);
  //     });
  //   }

  //   function pickVoice(gender = "male") {
  //     const soundList = {
  //       male: ["male", "david", "alex", "mark", "fred"],
  //       female: ["female", "zira", "samantha", "victoria", "karen"],
  //     }[gender];

  //     const match = voices.find((v) =>
  //       soundList?.some((keyword) => v.name.toLowerCase().includes(keyword))
  //     );

  //     return match || voices[0] || null;
  //   }

  //   async function ensureVoicesLoaded() {
  //     voices = speechSynthesis.getVoices();
  //     if (!voices.length) {
  //       voices = await loadVoices();
  //     }
  //   }

  //   async function initialize() {
  //     await ensureVoicesLoaded();

  //     if (!voices.length) {
  //       speakButton.style.display = "none";
  //       console.warn("No speech synthesis voices available.");
  //       return;
  //     }

  //     speakButton.addEventListener("click", async () => {
  //       if (!voices.length) {
  //         await ensureVoicesLoaded();
  //       }

  //       if (!flag) {
  //         handleStartSpeak();
  //       } else {
  //         handleStopSpeak();
  //       }
  //     });
  //   }

  //   function handleStartSpeak() {
  //     flag = true;

  //     const text = document.querySelector(".canvas")?.textContent?.trim();
  //     if (!text) {
  //       console.warn("No content to speak");
  //       return;
  //     }

  //     utterance = new SpeechSynthesisUtterance(text);

  //     const selectedVoice = pickVoice(); // "male" or "female"
  //     if (selectedVoice) {
  //       utterance.voice = selectedVoice;
  //     }

  //     utterance.rate = 1;
  //     utterance.pitch = 1;
  //     utterance.volume = 1;

  //     utterance.onend = function () {
  //       flag = false;
  //       speakButton.classList.add("stopped");
  //       speakButton.classList.remove("playing");
  //     };

  //     speakButton.classList.add("playing");
  //     speakButton.classList.remove("stopped");

  //     // Add a small delay for mobile browsers
  //     setTimeout(() => {
  //       speechSynthesis.speak(utterance);
  //     }, 100);
  //   }

  //   function handleStopSpeak() {
  //     if (speechSynthesis.speaking) {
  //       flag = false;
  //       speechSynthesis.cancel();
  //       speakButton.classList.add("stopped");
  //       speakButton.classList.remove("playing");
  //     }
  //   }

  //   // Start init
  //   initialize();
  // } else {
  //   const speakButton = document.getElementById("speak-btn");
  //   if (speakButton) speakButton.style.display = "none";
  //   console.warn("Speech Synthesis not supported in this browser.");
  // }

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
    const progressCircleContainer = document.querySelector(
      ".progress-circle-container"
    );
    const progressElement = document.querySelector(".progress-circle-bar");
    const scrollToTopElement = document.querySelector(".scroll-to-top");
    const percentageNode = document.getElementById("progress-value");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    let scrolled = window.pageYOffset / totalHeight;
    let progress = Math.min(scrolled * 283, 283);

    progressElement.style.strokeDashoffset = 283 - progress;

    const percent = Math.min(Math.round(scrolled * 100), 100);

    if (percent === 0) {
      progressCircleContainer.style.opacity = "0";
      progressCircleContainer.style.visibility = "hidden";
    } else {
      progressCircleContainer.style.opacity = "1";
      progressCircleContainer.style.visibility = "visible";
    }

    percentageNode.textContent = `${percent}%`;

    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 100
    ) {
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
