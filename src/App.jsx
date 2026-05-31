import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import PageWrapper from "./components/PageWrapper";
import IntroOverlay from "./components/IntroOverlay"; //DONE

// CSS by ChatGPT - Button Template DONE
function NavLinkItem({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="relative group text-sm font-medium">
      <span
        className={`transition duration-300 ${
          isActive ? "text-white" : "text-white/50 group-hover:text-white"
        }`}
      >
        {children}
      </span>

      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] w-full
          bg-white origin-left scale-x-0
          transition-transform duration-300
          group-hover:scale-x-100
          ${isActive ? "scale-x-100" : ""}
        `}
      />
    </Link>
  );
}

function AppContent() {
  const location = useLocation();
  const scrollRef = useRef(null); //For further animation (in main pages), ofc coded by ChatGPT as a tools :)

  return (
    <>
      <IntroOverlay />

      <div
        ref={scrollRef}
        id="scroll-container"
        className="h-screen overflow-y-auto overflow-x-hidden text-white bg-black"
      >
        {/* Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="relative px-8 py-5 flex justify-between items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase">
                Portfolio
              </span>
              <span className="text-lg font-semibold">
                Owen Putra Halim
              </span>
            </Link>

            <div className="flex items-center gap-8">
              <NavLinkItem to="/">Home</NavLinkItem>
              <NavLinkItem to="/projects">Projects</NavLinkItem>
            </div>
          </div>
        </nav>

        {/* Route to pages */}
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    {/* I USE useRef here! */}
                    <Main scrollRef={scrollRef} />  
                  </PageWrapper>
                }
              />

              <Route
                path="/projects"
                element={
                  <PageWrapper>
                    <Projects />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}