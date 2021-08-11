import logo from './logo.svg';
import './App.css';

import CovidMap from './CovidMap';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <CovidMap />
    </Provider>
  );
}

export default App;
