
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewProduct from "./Components/NewProduct";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="row">
      <ProductList/>
      <NewProduct/>
    </div>
  );
}

export default App;
