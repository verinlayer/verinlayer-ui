import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { Link, NavLink } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header className="h-[80px] py-[20px] flex justify-between items-center">
      <Link to="/">
        <img src={logoImg} alt="Logo" />
      </Link>

      <div className="flex justify-center items-center space-x-[40px] font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-400 flex items-center' : ''
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
                  Home
                </>
              ) : (
                'Home'
              )}
            </>
          )}
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-green-400 flex items-center' : ''
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
                  Dashboard
                </>
              ) : (
                'Dashboard'
              )}
            </>
          )}
        </NavLink>
        <NavLink
          to="/velodrome-app"
          className={({ isActive }) =>
            isActive ? 'text-green-400 flex items-center' : ''
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
                  Velodrome App
                </>
              ) : (
                'Velodrome App'
              )}
            </>
          )}
        </NavLink>
      </div>
      <div>
        <ConnectButton />
      </div>
    </header>
  )
}

export default Header
