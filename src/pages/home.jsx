
import Cart from "../components/Cart";
import Items from "../components/Items";


export default function home({setTotalPrice, items}) {
    
    
  return (
    <div className="App">
    <Cart  setTotalPrice={setTotalPrice} />
    <Items items={items}  />
    </div>
  )
}
