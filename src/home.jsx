
import Cart from "./Cart";
import Items from "./Items";


export default function home({setTotalPrice, items}) {
    
    
  return (
    <div className="App">
    <Cart  setTotalPrice={setTotalPrice} />
    <Items items={items}  />
    </div>
  )
}
