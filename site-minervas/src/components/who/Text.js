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
      <div className="text">
        <div className="title">
          Quem somos?
        </div>
        <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi nunc, laoreet eu neque sit amet, ultricies aliquet libero. Ut tempor pharetra feugiat. Duis et consequat massa, viverra cursus nibh. Suspendisse nisi erat, feugiat sit amet porta quis, egestas quis nisl. Ut fermentum mi in eros porttitor molestie. Cras justo massa, luctus in enim eu, imperdiet convallis massa. Aenean dictum sem eget lorem euismod, et elementum ligula eleifend.
        </div>
        <div className="button-box">
          <ColorButton variant="contained" color="primary" className='button' disableElevation onClick={click}>
            Ver membros
          </ColorButton>
        </div>
      </div>
    )
  }
}

export default Text
