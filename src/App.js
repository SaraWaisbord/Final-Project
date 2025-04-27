
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
import './App.css';
import { LoadProducts } from './components/Products/ProductScreen';
import { Home } from './screens/Home';
import store from './state/store/store';
import CartComponent  from './components/Cart/CartComponent';

function App() {
  return (
   
      <>
      <Provider store={store}>
        <RouterComponent></RouterComponent>
      </Provider>
      <ion-icon name="add"></ion-icon>
      </>
    
    
  );
}

export default App;
