import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Data from './Data';


const ItemDesc = () => {
    
  const navigate = useNavigate()
  const params = useParams()
  const [data, setData] = useState(Data)
  const [id, setId] = useState(parseInt(params.id-1))

function  sendToStorage(id) {
    const chosenItems = JSON.parse(localStorage.getItem("items"))

    const newArr = chosenItems.map((item)=>{
        return item.id
    })
    
  if(newArr.indexOf(data[id].id)===-1){
    chosenItems? 
    localStorage.setItem("items", JSON.stringify([...chosenItems,data[id]])):
    localStorage.setItem("items", JSON.stringify([data[id]]))
    navigate('/') 
  }else{
      alert("item already added")
  }
}

  return (
    <div className='item-desc'>
        
       <img  src={`.${data[id].picture}`}/>
       <h2>Name: {`${data[id].name}`}</h2>
       <h2>Price: {`R ${data[id].price.toFixed(2)}`}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut sem nulla pharetra diam sit amet nisl suscipit. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Feugiat sed lectus vestibulum mattis ullamcorper velit. Sit amet massa vitae tortor condimentum lacinia quis vel. 
            Amet justo donec enim diam vulputate ut pharetra sit amet.</p>
    <div className='buttons'>
        <button className='buy'
        onClick={()=>{
            sendToStorage(id)
        }}
        >Add Item</button>
       <button
       onClick={()=>{
           navigate('/')
       }}>Back</button>
       </div>
    </div>
  )
}

export default ItemDesc