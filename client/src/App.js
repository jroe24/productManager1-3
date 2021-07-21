import { Router } from "@reach/router";
import './App.css';
import Main from "./views/main";
import ViewProduct from "./components/ProductView";
import UpdateProduct from "./components/ProductUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/products"/>
        <ViewProduct path="/products/:id"/>
        <UpdateProduct path="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;