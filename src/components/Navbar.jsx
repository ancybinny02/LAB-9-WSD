import React, { Component } from 'react'
import '../styles/Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='logo'>Logo</div>
                    <div className='about'>About</div>
                    <div className='login'>Login</div>
                </div>
            </>

        )
    }
}
export default Navbar