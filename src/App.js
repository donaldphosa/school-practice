
import React, { useState }  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDesc from "./pages/ItemDesc";
import Data from "./Data";
import Home from "./pages/home";

function App() {
  const [items, setItems] = useState(Data)
  const [totalPrice, setTotalPrice] = useState(0)



  return (
    <BrowserRouter>
    <div className="main">
       <h2>Shop online with hustle free</h2>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home setTotalPrice={setTotalPrice} items={items} />}/>
      <Route path="/itemdesc/:id" element={<ItemDesc/>}/>
    </Routes>
    </div>
    <h3 className='totalPrice'>{`Total Price: R ${totalPrice.toFixed(2)}`}</h3>
    </div>
    </BrowserRouter>
  );
}

export default App;
