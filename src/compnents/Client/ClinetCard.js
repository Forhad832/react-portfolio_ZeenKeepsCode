import React from 'react'

const ClinetCard = ({IMG,para}) => {
  return (
    <div>
      <img src={IMG} alt="" />
      <p>{para}</p>
    </div>
  )
}

export default ClinetCard
