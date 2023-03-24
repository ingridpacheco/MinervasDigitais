import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { redirect } from "react-router-dom"

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
      <div className="content">
        <div className="title">
          Minerv@s Digitais
        </div>
        <div className="description">
          Projeto de Extensão da UFRJ com objetivo de fomentar a presença feminina no meio tecnológico
        </div>
        <div className="button-box">
          <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={click}>
            Saiba mais
          </ColorButton>
        </div>
      </div>
    )
  }
}

export default Text
