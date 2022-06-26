import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" alt='bulma' height="28" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to='/' className="navbar-item">
                Home
              </Link>

              <Link to='/about' className="navbar-item">
                About
              </Link>

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href='/'>
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href='/'>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="column is-three-fifths is-offset-one-fifth">
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/edit/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </div>
      <Routes>      
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
