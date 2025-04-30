
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import store from './state/store/store';

function App() {
  return (
   
      <>
      <Provider store={store}>
        <RouterComponent></RouterComponent>
      </Provider>
      </>
    
    
  );
}

export default App;
