import React from "react"
import Heading from "../../common/Heading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

import "./awards.css"


const Awards = () => {

  const awards = [
    {
      icon: <FontAwesomeIcon icon={faTrophy}  />,
      num: "32 M	",
      name: "United State Award",
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy}  />,
      num: "43 M",
      name: "kenya Award"
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy}  />,
      num: "51 M",
      name: "Europe Award"
    },
    {
      icon:  <FontAwesomeIcon icon={faTrophy}  />,
      num: "42 M",
      name: "United Kingdom Award",
    },
  ]
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Over Millions of Happy users love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
