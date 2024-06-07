import React from "react"

const Heading = ({ title, subtitle, h2}) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <h2>{h2}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
