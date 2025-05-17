import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarSkeleton from "../components/skeletons/NavbarSkeleton";
const Navbar = lazy(() => import("../components/Navbar"));
import AnimatedPage from "../components/AnimatedPage";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div>
      {/* Navbar will show its own skeleton while loading */}
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <div className="container">
        {/* AnimatedPage will animate whenever location changes */}
        <AnimatedPage key={location.pathname}>
          <Outlet />
        </AnimatedPage>
      </div>
    </div>
  );
};

export default RootLayout;
