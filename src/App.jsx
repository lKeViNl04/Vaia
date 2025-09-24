import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import E404 from "./pages/Error";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<E404/>} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

