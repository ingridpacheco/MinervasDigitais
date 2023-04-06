import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { redirect } from "react-router-dom"
import barras from "./../../assets/barras.svg"
import pizza from "./../../assets/pizza-graph.svg"

import "./Text.scss"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Lato",
    fontWeight: 300,
    backgroundColor: "#096262",
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}))(Button)

class Text extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      openChat: false
    }
  }

  openChat = () => {
    this.setState({
      openChat: true
    })
  }

  render(){
    const {click} = this.props
    console.log(this.props)

    return (
      <div className="motivation-text">
        <div className="title">
          Motivações
        </div>
        <div className="first-motivation">
          <img src={barras} alt="Gráfico de barras"></img>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi nunc, laoreet eu neque sit amet, ultricies aliquet libero. Ut tempor pharetra feugiat. Duis et consequat massa, viverra cursus nibh.
          </div>
        </div>
        <div className="second-motivation">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi nunc, laoreet eu neque sit amet, ultricies aliquet libero. Ut tempor pharetra feugiat. Duis et consequat massa, viverra cursus nibh.
          </div>
          <img src={pizza} alt="Gráfico de pizza"></img>
        </div>
      </div>
    )
  }
}

export default Text
