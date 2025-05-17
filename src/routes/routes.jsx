// src/routes/routes.jsx
import { lazy, Suspense } from "react";
import { Route, createRoutesFromElements } from "react-router-dom";
import ErrorFallback from "../components/ErrorFallback";
import Preloader from "../components/Preloader2";
import RouteWithSkeleton from "../utilis/RouteWithSkeleton";
// Lazy loaded pages
const RootLayout = lazy(() => import("../layout/RootLayout"));
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../layout/ContactLayout"));
const ContactInfo = lazy(() => import("../components/ContactInfo"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const NotFound = lazy(() => import("../components/NotFound"));

// Skeletons
import HomeSkeleton from "../components/skeletons/HomeSkeleton";
import ProductsSkeleton from "../components/skeletons/ProductsSkeleton";
import AboutSkeleton from "../components/skeletons/AboutSkeleton";
import ContactSkeleton from "../components/skeletons/ContactSkeleton";

export const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorFallback />}>
    <Route
      index
      element={<RouteWithSkeleton Component={Home} Fallback={HomeSkeleton} />}
    />
    <Route
      path="products"
      element={
        <RouteWithSkeleton Component={Products} Fallback={ProductsSkeleton} />
      }
    />
    <Route
      path="about"
      element={<RouteWithSkeleton Component={About} Fallback={AboutSkeleton} />}
    />
    <Route
      path="contact"
      element={
        <RouteWithSkeleton Component={Contact} Fallback={ContactSkeleton} />
      }
    >
      <Route
        path="info"
        element={
          <RouteWithSkeleton Component={ContactInfo} Fallback={Preloader} />
        }
      />
      <Route
        path="form"
        element={
          <RouteWithSkeleton Component={ContactForm} Fallback={Preloader} />
        }
      />
    </Route>
    <Route
      path="*"
      element={<RouteWithSkeleton Component={NotFound} Fallback={Preloader} />}
    />
  </Route>
);
