import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import Loader from "./components/Loaders";
import MainLayout from "./layouts/MainLayout";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Projects = React.lazy(() => import("./pages/Projects"));

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "14px 18px",
              border: "1px solid #34d399",
              boxShadow: "0 10px 25px -5px rgba(52, 211, 153, 0.2)",
              backdropFilter: "blur(8px)",
            },
            iconTheme: {
              primary: "#34d399",
              secondary: "#0f172a",
            },
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "14px 18px",
              border: "1px solid #f87171",
              boxShadow: "0 10px 25px -5px rgba(248, 113, 113, 0.2)",
              backdropFilter: "blur(8px)",
            },
            iconTheme: {
              primary: "#f87171",
              secondary: "#0f172a",
            },
          },
          style: {
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            color: "#e2e8f0",
            borderRadius: "12px",
            padding: "14px 18px",
            border: "1px solid #334155",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(8px)",
          },
        }}
      />

      <MainLayout>
        {/* Lazy loaded routes */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
