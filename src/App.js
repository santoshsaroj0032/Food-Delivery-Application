import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link  
} from "react-router-dom";
import Signup from './Screens/Signup.js';
import { CartProvider } from './Components/ContextReducer.js';


function App() {
  return (
    <CartProvider>

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create-user" element={<Signup />} />
          </Routes>
        </div>
      </Router>

    </CartProvider>
  );
}
export default App;
