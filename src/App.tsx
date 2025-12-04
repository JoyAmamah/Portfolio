import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";
import SocialLinkLeft from "./components/SocialLinkLeft";
import SocialLinkRight from "./components/SocialLinkRight";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          // Success Toast
          success: {
            style: {
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", // slate-800 to slate-900
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "14px 18px",
              border: "1px solid #34d399", // emerald-400 border
              boxShadow: "0 10px 25px -5px rgba(52, 211, 153, 0.2)",
              backdropFilter: "blur(8px)",
            },
            iconTheme: {
              primary: "#34d399", // emerald-400
              secondary: "#0f172a", // slate-900
            },
          },
          // Error Toast
          error: {
            style: {
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "14px 18px",
              border: "1px solid #f87171", // red-400 border
              boxShadow: "0 10px 25px -5px rgba(248, 113, 113, 0.2)",
              backdropFilter: "blur(8px)",
            },
            iconTheme: {
              primary: "#f87171", // red-400
              secondary: "#0f172a", // slate-900
            },
          },
          // Default Toast
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

      <NavBar />
      <SocialLinkRight />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <SocialLinkLeft />
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;