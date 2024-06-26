import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Factories from "./pages/Factories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<Services />} path="/services" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Factories />} path="/factories" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
