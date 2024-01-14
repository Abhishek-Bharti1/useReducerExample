import axios from "axios";
import { useEffect, useReducer } from "react";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { cartReducer } from "./reducers";
function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    products: [],
  });
console.log(state);
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div style={{
    display:"flex"
  }}>
  <ProductCard state={state} dispatch={dispatch} />
  <Cart state={state} dispatch={dispatch}/>
  </div>;
}

export default App;
