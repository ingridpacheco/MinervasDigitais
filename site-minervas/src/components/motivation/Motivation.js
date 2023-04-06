import React, {useRef} from "react"

import exampleimage from "../../assets/example-image.svg"
import Text from "./Text"
import TextField from '@material-ui/core/TextField';

import "./Content.scss"

function Motivation() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      <div className="motivation-content">
        <Text click={() => handleClick()}/>
      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Motivation
