import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h4 style={{color:"black"}}>Hello Shahrukh</h4>
        </div>
        <div className='header-right'>
            <BsSearch className='icon'/>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            
        </div>
    </header>
  )
}

export default Header