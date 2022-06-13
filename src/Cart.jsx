import React, { useState, useEffect } from 'react'


function Cart({setTotalPrice}) {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[])

function  deleteFromStorage(item) {
  setItem((data)=>{
    return data.filter((dt)=>{
      return item !== dt
    })
  })  
}

useEffect(()=>{
  localStorage.setItem("items", JSON.stringify([...item]))
  let price = 0; 
  for(let i = 0; i < item.length; i++){
    price = price + item[i].price;
  }
  setTotalPrice(price)
 
},[item])


  return (
    
  <div className='items'>
    <h6>Your item will show here after you choose</h6>
      {item && item.map((item , index)=>{
        return <div key={index} className='item'>
          <img src={item.picture} alt=''/>
          <div className='item-details'>
            <h3>{item.name}</h3>
            <h5>{`R ${item.price.toFixed(2)}`}</h5>
          </div>
          <button onClick={()=>deleteFromStorage(item)}>Remove Item</button>
        </div>
      })}
     
  </div>
    
    
  )
}

export default Cart