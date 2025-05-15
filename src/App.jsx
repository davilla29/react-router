// import Home from "./pages/Home";
// import Products from "./pages/Products";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Lazy load pages
import { lazy, Suspense } from "react";
import Preloader from "./components/Preloader";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const RootLayout = lazy(() => import("./layout/RootLayout"));
const ContactInfo = lazy(() => import("./components/ContactInfo"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const ContactLayout = lazy(() => import("./layout/ContactLayout"));
const NotFound = lazy(() => import("./components/NotFound"));
import AnimatedPage from "./components/AnimatedPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Preloader />}>
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<Preloader />}>
              <AnimatedPage>
                <Products />
              </AnimatedPage>
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Preloader />}>
              <AnimatedPage>
                <About />
              </AnimatedPage>
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Preloader />}>
              <ContactLayout />
            </Suspense>
          }
        >
          <Route
            path="info"
            element={
              <Suspense fallback={<Preloader />}>
                <AnimatedPage>
                  <ContactInfo />
                </AnimatedPage>
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense fallback={<Preloader />}>
                <AnimatedPage>
                  <ContactForm />
                </AnimatedPage>
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <AnimatedPage>
                <NotFound />
              </AnimatedPage>
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
