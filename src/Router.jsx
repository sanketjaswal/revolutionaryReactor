import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import App from "./App";
import { ItemDetails } from "./Components/ItemDetails/itemDetails";

//components
import { Navbar } from "./Components/Navbar/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:country/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
