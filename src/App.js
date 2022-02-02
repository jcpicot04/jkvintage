import React, { useState, useEffect } from "react";
import { jkvintage } from "./lib/jkvintage";
import { Products, Navbar, Cart, Checkout, Chaquetas, Polos, Camisas, Sudaderas, Camisetas, Pantalones, Accesorios, Lastdrop, Principal, Jerseys } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Scheherazade New", "cursive"].join(","),
  },
});

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [valueSearch, setValueSearch] = useState("");

  const fetchProducts = async () => {
    const { data } = await jkvintage.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await jkvintage.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const quan = await jkvintage.cart.contents();
    if (quan.length === 0) {
      var item = await jkvintage.cart.add(productId, quantity);
      setCart(item.cart);
    } else {
       const equalProduct = quan.find(q => q.product_id === productId);
       !equalProduct && setCart((await jkvintage.cart.add(productId, quantity)).cart);
    }
  };

  const handleUpdateCartQty = async (item, quantity) => {
    const availableProduct = await jkvintage.products.retrieve(item.product_id);
    if (quantity <= availableProduct.inventory.available){
        const { cart } = await jkvintage.cart.update(item.id, { quantity });
        setCart(cart);
    }
    
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await jkvintage.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await jkvintage.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await jkvintage.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await jkvintage.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar
            totalItems={cart.total_items}
            handleDrawerToggle={handleDrawerToggle}
            setvalueSearch={setValueSearch}
          ></Navbar>
          <Switch>
            <Route exact path="/">
              <Principal
                products={products}
                onAddToCart={handleAddToCart}
                valueSearch={valueSearch}
              ></Principal>
            </Route>
            <Route exact path="/chaquetas">
              <Chaquetas
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Chaquetas>
              </Route>
              <Route exact path="/polos">
              <Polos
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Polos>
              </Route>
              <Route exact path="/camisas">
              <Camisas
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Camisas>
              </Route>
              <Route exact path="/jerseys">
              <Jerseys
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Jerseys>
              </Route>
              <Route exact path="/sudaderas">
              <Sudaderas
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Sudaderas>
              </Route>
              <Route exact path="/camisetas">
              <Camisetas
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Camisetas>
              </Route>
              <Route exact path="/pantalones">
              <Pantalones
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Pantalones>
              </Route>
              <Route exact path="/accesorios">
              <Accesorios
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Accesorios>
              </Route>
              <Route exact path="/drop">
              <Lastdrop
               products={products}
               onAddToCart={handleAddToCart}
               valueSearch={valueSearch}
              ></Lastdrop>
              </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                handleCaptureCheckout={handleCaptureCheckout}
                products={products}
              ></Cart>
            </Route>
            <Route exact path="/checkout">
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              ></Checkout>
            </Route>
            <Route exact path="/productos">
              <Products
                products={products}
                onAddToCart={handleAddToCart}
                valueSearch={valueSearch}
              ></Products>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
