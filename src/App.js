// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routers from "./routes/Routers";
import React from "react";
// import { cartActions } from "./redux/slices/cartSlice";

function App() {

  // const dispatch = useDispatch();
  // const cartState = useSelector(state => state.cart);
  
  // React.useEffect(() => {
  //   if (cartState.cartItems && cartState.cartItems.length) {
  //     localStorage.setItem('products', JSON.stringify(cartState));
  //   } else {
  //     console.log('bura girirem');
  //     const savedCartState = JSON.parse(localStorage.getItem('products'));
  //     dispatch(cartActions.setState(savedCartState));
  //   }
  // }, [cartState, dispatch]);
  

  return <>
  <Header/>
<Routers/>
<Footer/>  
  </>;
}

export default App;
