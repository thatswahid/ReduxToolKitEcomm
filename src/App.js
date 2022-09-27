import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import Store from './Store/Store'

function App() {
  return (
    < >
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route />
          </Routes>
        </BrowserRouter>
     </Provider>

    </>
  );
}

export default App;
