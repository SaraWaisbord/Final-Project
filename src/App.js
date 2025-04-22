
import './App.css';
import { NavigateComponent } from './components/RouterComponent';
import { Product } from './components/ProductComponent';
import { Home } from './screens/Home';
import imgPath from './img.JPG';

function App() {
  return (
    <Product path={imgPath} shortDesc="abc" price="123.6" />
  );
}

export default App;
