
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import store from './state/store/store';
import FooterComponent from './components/Footer';
function App() {
  return (
   
<>
      <Provider store={store}>
        <RouterComponent></RouterComponent>
       <FooterComponent></FooterComponent>
      </Provider>
      </>
    
    
  );
}

export default App;
