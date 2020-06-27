import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext, Logout, Login } from 'esw-ts'

const NavBar = () => {
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
          $if(auth_needed.truthy)$
          <li>
            {!auth  ? (
              <span>Loading...</span>
            ) : auth.isAuthenticated() ? (
              <Logout />
            ) : (
              <Login />
            )}
          </li>
          $endif$
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
