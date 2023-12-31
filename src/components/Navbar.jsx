import React from 'react'
import { Link } from 'react-router-dom';



export default function Navbar (props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className='nav-link text-danger-emphasis' to='/'>Home</Link>
                {props.loggedIn || props.value? (
                    <>
                    <Link className='nav-link text-success' to='/posts'>Drink Inventory</Link>
                    <Link className='nav-link text-primary' to='/create'>Add Invzntory</Link>
                    <Link className='nav-link text-warning' to='/' onClick={props.logUserOut}>Log Out</Link>
                    <button className='btn btn' onClick={props.LogOut}>LogOut with Google</button>
                    </>
                ) : (
                    <>
                    <button className='nav-link text-white' onClick={props.handleClick}>Sign in with Google</button>
                    <Link className='nav-link text-success-emphasis' to='/sign_up'>Sign Up</Link>
                    <Link className='nav-link text-primary-emphasis' to='/login'>Log In</Link>              
                    </>
                )}

            </div>
        </nav>
    </>
  )
}