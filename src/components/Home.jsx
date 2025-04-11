import React, { useEffect } from 'react';
import axios from 'axios';
import ShoppingCard from './ShoppingCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [CardData, setCardData] = useState();
  const navigate = useNavigate();

  const FetchProducts = async() => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setCardData(res.data);
    } catch(err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
   
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    
    FetchProducts();
  }, [navigate]);

  return (
    <div>
      <ShoppingCard data={CardData}/>
    </div>
  );
};

export default Home;