import React from 'react'
import Card from '../components/Card'
import { useState,useEffect } from 'react'
import axios from "axios";
import './Articles.css'
const Articles = () => {
const [cards,setCards]=useState([])

useEffect(()=>{
  

const fetching = async ()=>{
  console.log('kkkkk')

try{
  const data= await axios.get('http://localhost:4000/articles/read');
  console.log(data.data)
  setCards(data.data.data)
}catch(error){
  console.log(error)
}}



fetching()
},[])


  return (
    <div className='cards'>
      <h1>Articles</h1>
      <div>{cards.map(card=><Card card={card} />)}</div>
    </div>
  )
}

export default Articles
