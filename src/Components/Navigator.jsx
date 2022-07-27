import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navigator = () => {

    const [high,setHigh]=useState(false)

    const highlight=()=>{
        setHigh(true)
    }

    const rmvHigh = () => { setHigh(false) }
    return (
        <div className='sidebar '>
            <ul className='navigator pt-4'>
                <li style={{ flex: "40%", textAlign: "center" }} onMouseEnter={highlight} onMouseLeave={rmvHigh}><Link to="/"><span className='navLetter m-n4 f-7'>Y</span><span className={`navName ${high?'options':''}`}>Yaseen</span></Link></li>
                <li style={{ flex: "20%" }}><Link to="/about"><span className="options">About
                </span></Link></li>
                <li style={{ flex: "20%" }}><Link to="/skills"> <span className="options">Skills</span></Link></li>
                <li style={{ flex: "20%" }}><Link to="/projects"><span className="options">Projects</span></Link></li>
            </ul>
        </div>
    )
}

export default Navigator 