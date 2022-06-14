import React from 'react';
import {useNavigate} from "react-router-dom"

function Items({items}) {

  const navigate = useNavigate()
  

  function  sendToStorage(id, item) {
    const chosenItems = JSON.parse(localStorage.getItem("items"))

    const newArr = chosenItems.map((id)=>{
      return id.id
    })
    
    
    if(newArr.indexOf(id) === -1){
      if(id === item.id){
      
        chosenItems? 
        localStorage.setItem("items", JSON.stringify([...chosenItems,{ ...item, quantity: 1} ])):
        localStorage.setItem("items", JSON.stringify([item]))
        window.location.reload()
        
      }
    }else{
      alert("Item already added")
      
    }
        
  }
  
  return (
    <div className='items'>
      <h6>Check Our Cool electronics</h6>
    {items.map((item , index)=>{
      return <div key={index} className='item'>
        <img src={item.picture} alt=''/>
        <div className='item-details'>
          <h3>{item.name}</h3>
          <h5>{`R ${item.price.toFixed(2)}`}</h5>
        </div>
        <button
        onClick={()=>{
          navigate(`./itemdesc/${item.id}`)
        }}>Details</button>
        <button  onClick={()=>{
          sendToStorage(item.id, item)
          
        }
        }>Add Item</button>
      </div>
    })}
    </div>
  )
}

export default Items