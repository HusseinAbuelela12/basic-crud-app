import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import AppNavbar from './components/app-navbar/AppNavbar';
import AppSidebar from './components/app-sidebar/AppSidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <AppNavbar />
        <div className='row me-0 '>
          <div className='col-2 sidebar'>
          <AppSidebar />
          </div>
          <div className='col-10 main-sid'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='products/add' element={<AddProduct />} />
              <Route path='products/:productID' element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;