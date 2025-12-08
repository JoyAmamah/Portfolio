import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const Loader = React.lazy(() => import("./components/Loaders"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

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
          duration: 3000,
          style: {
            background: "#0f172a",
            color: "#e2e8f0",
            borderRadius: "10px",
            border: "1px solid #334155",
          },
        }}
      />

      {/* Lazy-load layout */}
      <Suspense fallback={<div />}>
        <MainLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
