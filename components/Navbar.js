import React, { useState } from 'react'
import Hero from './Hero'
const MENU_LIST = [
  { text: 'Inicio', href: '/' },
  { text: '¿Quiénes somos?', href: '/about' },
  { text: 'Contacto', href: '/contact' }
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [navActiveLink, setNavActiveLink] = useState(false)

  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <>
      <header>
        <nav className={`nav`}>
          <img src="logo.png" alt="" width={140} height={70} />

          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div className={`${navActive ? 'is-rotated' : ''}`}></div>
            <div className={`${navActive ? 'is-gone' : ''}`}> </div>
            <div className={`${navActive ? 'is-rotated2' : ''}`}></div>
          </div>
          <div
            className={`${navActive ? 'active' : ''} nav__menu-list ${
              navActiveLink ? 'hidden' : ''
            }`}
          >
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx)
                  setNavActive(false)
                }}
                key={menu.text}
              >
                <button
                  className="btn2"
                  onClick={() => {
                    location.href = `${menu.href}`
                    setNavActiveLink(true)
                  }}
                >
                  {menu.text}
                </button>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
