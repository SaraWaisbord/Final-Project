import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { About } from '../screens/About';
import { Products } from '../screens/Products';
import { Home } from '../screens/Home';
import { ExtandProduct } from './Products/extendProduct';
import CheckoutComponent from './Cart/CheckoutComponent';
import CartComponentIcon from './Cart/CartComponentIcon';
import CartComponent from './Cart/CartComponent';
import '../css/nav.css';
import SearchFieldComponent from './SearchFieldComponent';
import CategoriesComponent from './CategoriesComponent';
const RouterComponent = ({ toggleTheme }) => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="tech-navbar">
        <Container>
          <Navbar.Brand className="brand-logo">Travel Product</Navbar.Brand>
          <Nav className="me-auto nav-links">
          <Nav.Link as={Link} to="/" className="nav-link-item home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link-item about">About</Nav.Link>
          <Nav.Link as={Link} to="/categories" className="nav-link-item products">Products</Nav.Link>

          </Nav>
          <div className="cart-container">
            <button onClick={toggleTheme}>
              <ion-icon name="contrast-outline"></ion-icon>
            </button>
            <Link to="/cart">
              <CartComponentIcon />
            </Link>
            <SearchFieldComponent></SearchFieldComponent>
          </div>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/categories" element={<CategoriesComponent />} />
        <Route path="/product/:id" element={<ExtandProduct />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/checkout" element={<CheckoutComponent />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
