import './App.css'
import {products} from "./data/productsList.ts";
import {IProduct} from "./models/IProduct.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";

function App() {
  return (
    <>
        {
            products.map((product: IProduct, index) => <MyProduct key={index} product={product}/>
            )
        }
    </>
  );
}

export default App
