import Regster from "./pages/startPage/startPage";
import useStore from "./zustand/zustand";
import CreateAccount from "./pages/CreateAccount/createAccount";
import ShopStore from "./pages/shopStore/shopStore";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

const App = () => {
  const { count } = useStore();

  const stateMangment = () => {
    if (count === 1) {
      return <Regster />;
    } else if (count === 2) {
      return <CreateAccount />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={stateMangment()} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ShopStore />} />
        {/* <Route path="/Fav" element={<Fav />} />
        <Route path="/sheet" element={<Sheet/>} />
        <Route path="/cart" element={<Cart/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
