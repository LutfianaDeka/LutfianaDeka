import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// tambahkan useLocation di sini
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Footer from "./component/footer";
import Portofolio from "./component/portofolio";
import Pengalaman from "./component/pengalaman";
import DetailPengalaman from "./component/detailpengalaman";
import Kontak from "./component/Kontak";

// kita pisahkan isi routes ke komponen baru agar bisa menggunakan useLocation()
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // mode="wait" memastikan halaman lama hilang dulu baru halaman baru muncul
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <main className="flex flex-col gap-10 flex-grow pt-10">
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="portofolio">
                  <Portofolio />
                </section>
                <section id="pengalaman">
                  <Pengalaman />
                </section>
                <section id="kontak">
                  <Kontak />
                </section>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/detail-pengalaman" element={<DetailPengalaman />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
