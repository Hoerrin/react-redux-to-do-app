import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__top">
                <div className="nav__tab">
                    <h3 className="nav__h3">Today </h3><p>5</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__h3">Next 7 days </h3><p>2</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__h3">Bin </h3><p>6</p>
                </div>
            </div>  
            <div className="nav__bottom">
                <div className="nav__tag">
                    <h3 className="nav__h3">Work </h3><p>6</p>
                </div>
                <div className="nav__tag">
                    <h3 className="nav__h3">School </h3><p>3</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
