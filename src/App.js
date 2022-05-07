import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import NotFound from './Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>}>
        </Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>}>
        </Route>
        <Route path='/'></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
