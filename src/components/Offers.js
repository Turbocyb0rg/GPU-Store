import React from 'react'

const Offers = ({src,link,index}) => {
  return (
    <a href={link}><img src={src} alt={'${index} gpu'}/></a>
  )
}

export default Offers