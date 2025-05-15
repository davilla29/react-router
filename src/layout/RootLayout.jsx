import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader"; // skeleton page loader
import AnimatedPage from "../components/AnimatedPage";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <div className="container">
        {/* Suspense fallback triggers only if the Outlet child is still loading */}
        <Suspense fallback={<Preloader />}>
          {/* AnimatedPage will animate whenever location changes */}
          <AnimatedPage key={location.pathname}>
            <Outlet />
          </AnimatedPage>
        </Suspense>
      </div>
    </div>
  );
};

export default RootLayout;
