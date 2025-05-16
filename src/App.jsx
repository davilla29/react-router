import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
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
      <Route path="/" element={<RootLayout />} errorElement={<ErrorFallback />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
