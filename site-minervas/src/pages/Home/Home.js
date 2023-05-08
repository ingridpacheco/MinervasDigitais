import React from "react"

import Content from "../../components/content/Content"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Motivation from "../../components/motivation/Motivation"
import Partners from "../../components/partners/Partners"
import Who from "../../components/who/Who"
import Net from "../../components/net/Net"

import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <Header />
      <Content />
      <Who />
      <Motivation />
      <Partners />
      <Net />
      <Footer />
    </div>
  )
}

export default Home
