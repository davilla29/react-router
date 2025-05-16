import { motion } from "framer-motion";

export default function ErrorFallback({ error }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      role="alert"
    >
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h1>
      <p className="text-gray-700 mb-4">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Reload Page
      </button>
    </motion.div>
  );
}
