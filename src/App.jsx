import Login from "./login/login";
import useStore from "./zustand/zustand";
import CreateAccount from "./CreateAccount/createAccount";
import ShopStore from "./shopStore/shopStore";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

const App = () => {
  const { count } = useStore();

  return (
    <BrowserRouter>
      <Routes>
        {count === 1 && <Route path="/" element={<Login />} />}
        {count === 2 && <Route path="/" element={<CreateAccount />} />}
        <Route path="/shop" element={<ShopStore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
