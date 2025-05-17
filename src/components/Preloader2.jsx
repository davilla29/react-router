// // src/components/Preloader.jsx
// import React from "react";

// const Preloader = () => {
//   return (
//     <div>
//       <h2>Loading....</h2>
//     </div>
//   );
// };

// export default Preloader;


const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-24">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h2 className="mt-3 font-bold text-blue-600">Loading...</h2>
    </div>
  );
};

export default Preloader;

