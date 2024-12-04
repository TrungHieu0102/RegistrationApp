import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div style={{display:"flex", gap:"4px", flexDirection:"column"}}>
     <Link to="/choosebrand" >Choose brand</Link>
     <Link to="/product">Product</Link>
     <Link to="/state">State</Link>
     <Link to="/render-list">Reder List</Link>
     <Link to="/form">Form</Link>
     <Link to="/login">Login</Link>


    </div>
  );
}
export default App;
