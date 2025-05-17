// src/routes/routes.jsx
import { lazy } from "react";
import { Route, createRoutesFromElements } from "react-router-dom";
import ErrorFallback from "../components/ErrorFallback";

// Lazy loaded pages
const RootLayout = lazy(() => import("../layout/RootLayout"));
const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const ContactLayout = lazy(() => import("../layout/ContactLayout"));
const ContactInfo = lazy(() => import("../components/ContactInfo"));
const ContactForm = lazy(() => import("../components/ContactForm"));
const NotFound = lazy(() => import("../components/NotFound"));

export const routes = createRoutesFromElements(
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
);
