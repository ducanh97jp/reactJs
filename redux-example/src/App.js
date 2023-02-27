import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewProduct from './redux/NewProduct';
import ProductList from './redux/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList/>
      <NewProduct/>
    </div>
  );
}

export default App;
