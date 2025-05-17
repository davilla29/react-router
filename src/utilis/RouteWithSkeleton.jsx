import { Suspense } from "react";

const RouteWithSkeleton = ({ Component, Fallback }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
};

export default RouteWithSkeleton;
