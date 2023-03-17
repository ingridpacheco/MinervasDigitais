import React from "react"

import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { redirect } from "react-router-dom"

import "./Text.scss"

const ColorButton = withStyles(() => ({
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    fontWeight: "bold",
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
      <div className="text">
        <div className="title">
          Cuidado médico virtual pensado para você
        </div>
        <div className="description">
          Marcação online e atendimento acessível. Forma de utilizar
          a tecnologia a favor de pessoas com cuidados especiais.
        </div>
        <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={click}>
          Marcar consulta
        </ColorButton>
      </div>
    )
  }
}

export default Text
