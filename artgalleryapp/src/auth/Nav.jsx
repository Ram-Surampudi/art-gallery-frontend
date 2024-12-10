import React, { useContext } from 'react'
import { Arr } from '../App.js';

import '../css/nav.css'

const Nav = () => {
  const [arr,] = useContext(Arr);
  return (
    <div>
        <nav class="nav">
      <div class="container">
        <h1 className='nav-h1-tag'><a href="/home">Art Gallery</a></h1>
        <ul>
          {arr.map(item=>(
            <li><a href={'/'+item}>{item.toUpperCase()}</a></li>
          ))}
        </ul>
      </div>
    </nav>
      
    </div>
  )
}

export default Nav
