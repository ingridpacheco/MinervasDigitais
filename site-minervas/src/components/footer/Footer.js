import React from "react"

import whiteLine from "../../assets/white-line.svg"

import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <img src={whiteLine} className="white-line" alt="white-line" />
      <div className="copyright">
        Minerv@s Digitais UFRJ © 2022 - Todos os direitos reservados
      </div>
    </div>
  )
}

export default Footer
