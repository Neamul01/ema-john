import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
