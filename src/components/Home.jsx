import React, { useEffect } from 'react'
import axios from 'axios'
import ShoppingCard from './ShoppingCard'
import { useState } from 'react'

const Home = () => {
  const [CardData, setCardData] = useState();
  const FetchProducts = async() =>{

    try{
      const res  = await axios.get("https://fakestoreapi.com/products");
    
      setCardData(res.data);
 

    }catch(err){
      console.error(err.message);
    }
 

  }

  useEffect(()=>{
    FetchProducts();
  }, []);
  return (
    <div>
     <ShoppingCard data = {CardData}/>
    </div>
  )
}

export default Home
