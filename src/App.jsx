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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Preloader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<Preloader />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Preloader />}>
              <About />
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
                <ContactInfo />
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense fallback={<Preloader />}>
                <ContactForm />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
