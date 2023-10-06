import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

import {Routes,Route} from "react-router-dom"

import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />

       
       <Route path='/checkout' element={<Checkout  />} /> 
        
      
      </Routes>
    </div>
  );
}

export default App;