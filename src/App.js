
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterComponent from './components/RouterComponent';
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
