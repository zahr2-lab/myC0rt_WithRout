import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import TopBar from "./Components/TopBar/TopBar";
import CartPage from "./Components/CartPage/CartPage";
import Page from "./Components/Page/Page";
import { atom, useRecoilValue } from "recoil";
import Menu from "./Components/Menu/Menu";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const cartState = atom({
  key: "cart",
  default: false
});

export const menuState = atom({
  key: "menu",
  default: false
});

export default function App() {
  const cart = useRecoilValue(cartState);
  const menu = useRecoilValue(menuState);

  return (
    <div className="App">
      <div className="container">
        {menu && <Menu />}
        <div className="page">
          <Router>
            <TopBar />
            <Switch>
              <Route path="/Cart">
                <CartPage />
              </Route>
              <Route path="/Page/:page" children={<Page />} />
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
