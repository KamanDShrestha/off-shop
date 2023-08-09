import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';

import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
