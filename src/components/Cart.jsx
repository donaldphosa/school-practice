import React, { useState, useEffect } from 'react'


function Cart({setTotalPrice}) {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[])


function  deleteFromStorage(item) {
  setItem((data)=>{
    return data.filter((dt)=>{
      return item !== dt
    })
  })  
}

useEffect(()=>{
  localStorage.setItem("items", JSON.stringify([...items]))
  let price = 0; 
  for(let i = 0; i < items.length; i++){
    price = price + items[i].price * (items[i].quantity>1?items[i].quantity:1);
  }
  setTotalPrice(price)
 
},[items])


function increaseQuantity(id){
  
  const updated = items.map((item)=>{
    return id === item.id? {...item, quantity: item.quantity + 1} : item
  })
  localStorage.setItem("items", JSON.stringify( updated))
  window.location.reload()
}

function decreaseQuantity(id){
  
  const updated = items.map((item)=>{
    return id === item.id? {...item, quantity: item.quantity > 1?  item.quantity - 1 : item.quantity - 0 } : item
  })
  localStorage.setItem("items", JSON.stringify( updated))
  window.location.reload()
}




  return (
    
  <div className='items'>
    <h6>Your item will show here after you choose</h6>
      {items && items.map((item , index)=>{
        return <div key={index} className='item'>
          <img src={item.picture} alt=''/>
          <div className='item-details'>
            <h3>{item.name}</h3>
            <h5>{`R ${item.price.toFixed(2) }`}</h5>
          </div>
          <div>
           <button  onClick={()=>{
            decreaseQuantity(item.id)
            return
            
           }} className='quan dec'>
             - 
             </button>
             {item.quantity} 
             
             <button onClick={()=>{
            increaseQuantity(item.id)
            return
           }} className='quan '> + </button>
          <button onClick={()=>deleteFromStorage(item)}>Remove Item</button>
          </div>
        </div>
      })}
     
  </div>
    
    
  )
}

export default Cart