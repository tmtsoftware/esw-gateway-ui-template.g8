import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext, Logout, Login } from 'esw-ts'

const NavBar = () => {
  const { auth } = useContext(AuthContext)

  return (
    <nav>
      <div>
        <a href='https://www.tmt.org/' className='brand-logo'>
          TMT
        </a>
        <ul>
          <li>
            <Link to='/SampleGUI'> SampleGUI </Link>
          </li>
          <li>
            {!auth  ? (
              <span>Loading...</span>
            ) : auth.isAuthenticated() ? (
              <Logout />
            ) : (
              <Login />
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
