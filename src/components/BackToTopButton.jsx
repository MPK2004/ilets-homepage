import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  if (!isVisible) {
    return null;
  }
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600/80 backdrop-blur-sm text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
      aria-label="Go to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;