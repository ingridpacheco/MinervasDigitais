import React from "react"

import logonova from "../../assets/logonova.svg"
import Menu from "./Menu"

import "./Header.scss"

function Header() {
  return (
    <div className="header">
      <img src={logonova} className="logo" alt="logo" />
      <Menu />
    </div>
  )
}

export default Header
