import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

import image from '../assets/article.png'
const Card = ({card}) => {
  return (
    <div className='card'>
      <img src={image} height={50} width={50} alt='article'/>
      <h6>{card.title}</h6>
      <p className='body'>{card.body.substring(0,20)}</p>
     <Link to='/article'><button className='button'>Read More</button></Link> 
    </div>
  )
}

export default Card ;
