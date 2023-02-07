import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ItemList from './Pages/ItemList'
import Restruant from './Pages/Restruant';
import OrderHistory from './Pages/OrderHistory';
import OrderBy from './Pages/OrderBy';
import AddToCart from './Pages/AddToCart';
import GoogleSearch from './Pages/GoogleMapSearchBox'



function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/ItemList' element={<ItemList />} />
          <Route path='/restraunts' element={<Restruant />} />
          <Route path='/order' element={<OrderHistory  />} />
          <Route path='/orderby' element={<OrderBy  />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/GoogleSearch' element={<GoogleSearch />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
 
  );

}

export default App;
