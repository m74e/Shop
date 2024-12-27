import Login from "./login/login";
import useStore from "./zustand/zustand";
import CreateAccount from "./CreateAccount/createAccount";
import ShopStore from "./shopStore/shopStore";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

const App = () => {
  const { count } = useStore();

  const stateMangment = () => {
    if (count === 1) {
      return <Login />;
    } else if (count === 2) {
      return <CreateAccount />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={stateMangment()} />
        <Route path="/shop" element={<ShopStore />} />
        {/* <Route path="/Fav" element={<Fav />} />
        <Route path="/sheet" element={<Sheet/>} />
        <Route path="/cart" element={<Cart/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
