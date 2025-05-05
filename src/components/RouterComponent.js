import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { About } from '../screens/About';
import { Products } from '../screens/Products';
import { Home } from '../screens/Home';
import { Product } from './Products/ProductComponent';
import CheckoutComponent from './Cart/CheckoutComponent';
import CartComponentIcon  from './Cart/CartComponentIcon';
import { ExtandProduct } from './Products/extendProduct';
import CartComponent from '../components/Cart/CartComponent'
import '../css/nav.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
const RouterComponent = () => {
  const theme=useContext(ThemeContext);
  const classNameTheme='form-'+theme;
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" className="tech-navbar">
          <Container>
          
            <Navbar.Brand className="brand-logo">Travel Product</Navbar.Brand>
            <Nav className="me-auto nav-links">
              <Nav.Link as={Link} to="/" className="nav-link-item">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-item">About</Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-link-item">Products</Nav.Link>
            </Nav>
            <div className="cart-container">
            <ion-icon name="contrast-outline" ></ion-icon>
            <Link to={`/cart`}>
              <CartComponentIcon />
              </Link>
            </div>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/ExtandProduct" element={<ExtandProduct/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ExtandProduct />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/checkout" element={<CheckoutComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;