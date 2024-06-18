import React from 'react'
import Offers from "./Offers.js"
import "../Styles/Offer.css"

export const Offer = ({gpu}) => {
  return (
    <div className='offerSection'>{
        gpu.map((item,index)=>(
        <Offers key={item.image} index={index} src={item.image} link={item.url}/>
        ))}
    </div>
  )
}
export default Offer