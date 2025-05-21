import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarSkeleton from "../components/skeletons/NavbarSkeleton";
import ErrorBoundary from "../components/ErrorBoundary"; // Add this
const Navbar = lazy(() => import("../components/Navbar"));
import AnimatedPage from "../components/AnimatedPage";

const RootLayout = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div>
        {/* Navbar with skeleton while loading */}
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>

        <div className="container">
          {/* Wrap the Outlet inside ErrorBoundary */}

          <AnimatedPage key={location.pathname}>
            <Outlet />
          </AnimatedPage>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default RootLayout;
