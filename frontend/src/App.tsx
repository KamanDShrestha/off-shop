import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
