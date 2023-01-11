import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import FullApple from "./pages/FullApple";
import Header from "./components/Header";
import Faq from "./components/Faq";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="" element={<Banner />} />
        </Routes>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="apple/:id" element={<FullApple />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Faq />
    </div>
  );
}

export default App;
