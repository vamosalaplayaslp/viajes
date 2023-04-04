import React, { useState } from 'react'

const MENU_LIST = [
  { text: 'Inicio', href: '/' },
  { text: '¿Quiénes somos?', href: '/about' },
  { text: 'Contacto', href: '/contact' }
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <>
      <section className="section-header">
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
            <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx)
                    setNavActive(false)
                  }}
                  key={menu.text}
                >
                  <a href="/">{menu.text}</a>
                </div>
              ))}
            </div>
          </nav>
        </header>
        <section className="hero">
          <div className="left">
            <div className="pre-header">Los mejores destinos de mexico</div>
            <div className="title">
              <h1>
                Viaja, disfruta, y ten las mejores vacaciones con tu agencia de
                confiaza
                <span> Vamos a la playa</span>
              </h1>
            </div>
            <div className="buttons">
              <button>Conoce nuestros viajes</button>
            </div>
          </div>
          <div className="right">
            <img
              src="https://uploads-ssl.webflow.com/6170700f1a1db6b3a0ac16ed/617938cf58e87917dc7a61ec_woman-planes.png"
              alt=""
            />
          </div>
        </section>
      </section>
    </>
  )
}

export default Navbar
