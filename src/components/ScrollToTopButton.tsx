const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className="fixed cursor-pointer -rotate-90 group right-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference hidden lg:block"
    >
      {/* Line */}
      <span
        className="relative w-[180px] h-0.5 bg-white overflow-hidden z-1
                   after:content-[''] after:block after:absolute after:left-24 after:top-3.5 after:w-[70px] after:h-px after:bg-white"
      ></span>
      {/* Text */}
      <span className="text-white text-sm uppercase whitespace-nowrap">
        Scroll Top
      </span>
    </div>
  );
};

export default ScrollToTopButton;
