import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext, Logout, Login } from 'esw-ts'

const NavComponent = () => {
  const { auth } = useContext(AuthContext)

  return (
    <nav className='indigo'>
      <div className='nav-wrapper'>
        <a href='https://www.tmt.org/' className='brand-logo'>
          TMT
        </a>
        <ul className='right'>
          <li>
            <Link to='/$component_name$'> $component_name$ </Link>
          </li>
          <li>
            {!auth ? (
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

export default NavComponent
