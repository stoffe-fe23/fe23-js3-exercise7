import './App.css';
import ReduxCalc from './ReduxCalc';
import { Provider } from 'react-redux';
import store from './store/reduxCalcStore';

function App() {

  return (
    <Provider store={store}>
      <ReduxCalc />
    </Provider>
  );
}

export default App;
