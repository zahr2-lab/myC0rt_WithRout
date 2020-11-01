import React, { useEffect } from "react";
import products from "./Components/ProductsList/products";
import MainPage from "./Components/MainPage/MainPage";
import TopBar from "./Components/TopBar/TopBar";
import CartPage, { cartListState } from "./Components/CartPage/CartPage";
import Page, { productsState } from "./Components/Page/Page";
import Menu from "./Components/Menu/Menu";
import ProceedPage from "./Components/ProceedPage/ProceedPage";
import SignPage from "./Components/SignPage/SignPage";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import "./styles.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export const menuState = atom({
  key: "menu",
  default: false
});

export const isAuthenticatedState = atom({
  key: "isAuthenticated",
  default: false
});

export default function App() {
  const setProductList = useSetRecoilState(productsState);
  const setCartList = useSetRecoilState(cartListState);

  useEffect(() => {
    setProductList(products);
    // localStorage.setItem("cartList", []);
    localStorage.getItem("cartList") &&
      setCartList(JSON.parse(localStorage.getItem("cartList")));
  }, [setCartList, setProductList]);

  const menu = useRecoilValue(menuState);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  return (
    <div className="App">
      <div className="container">
        {menu && <Menu />}
        <div className="page">
          <Router>
            <TopBar />
            <Switch>
              <Route path="/Cart" children={<CartPage />} />
              <Route path="/Page/:page" children={<Page />} />
              <Route path="/login" children={<SignPage />} />
              <Route path="/Proceed">
                {isAuthenticated ? (
                  <ProceedPage />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login"
                    }}
                  />
                )}
              </Route>
              <Route path="/" children={<MainPage />} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
