import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Redirect to homepage when user returns from another site
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        sessionStorage.setItem("hrh_left", "true");
      }
      if (document.visibilityState === "visible" && sessionStorage.getItem("hrh_left") === "true") {
        sessionStorage.removeItem("hrh_left");
        if (pathname !== "/") {
          navigate("/", { replace: true });
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [pathname, navigate]);

  return null;
};

export default ScrollToTop;
