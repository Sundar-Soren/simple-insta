import React from 'react'
import Navbar from './Navbar'

const Base = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {children}

                </div>

            </div>
        </>
    )
}

export default Base
