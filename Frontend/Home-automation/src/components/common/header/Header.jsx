import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <Link to={"/"}>Home automation system</Link>
           
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
            </h4>
            <button className='btn1'>
            <Link to={"/Login"}>
            Sign In
            </Link>
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
