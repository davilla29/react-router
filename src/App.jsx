import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes/routes";
import ErrorBoundary from "./components/ErrorBoundary";
import Preloader from "./components/Preloader";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
