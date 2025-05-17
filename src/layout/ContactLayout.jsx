// import Contact from "../pages/Contact";
// import { Outlet } from "react-router-dom";

// const ContactLayout = () => {
//   return (
//     <div>
//       <Contact />
//       <Outlet />
//     </div>
//   );
// };

// export default ContactLayout;

import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Preloader from "../components/Preloader";
import Preloader2 from "../components/Preloader2";
import AnimatedPage from "../components/AnimatedPage";

const ContactLayout = () => {
  const location = useLocation();

  return (
    <div>
      {/* Static Contact text/content that never re-renders or animates */}
      <Contact />

      {/* Animated Outlet children only */}
      <Suspense fallback={<Preloader2 />}>
        <AnimatedPage key={location.pathname}>
          <Outlet />
        </AnimatedPage>
      </Suspense>
    </div>
  );
};

export default ContactLayout;
