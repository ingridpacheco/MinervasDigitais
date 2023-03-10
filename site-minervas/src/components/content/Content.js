import React from "react"

import Text from "./Text"

import "./Content.scss"

function Content() {
  return (
    <div className="home-content">
      <Text />
      <img src={doctors} className="doctors" alt="doctors" />
    </div>
  )
}

export default Content
