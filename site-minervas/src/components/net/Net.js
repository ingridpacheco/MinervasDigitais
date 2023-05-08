import React, {useRef} from "react"

import exampleimage from "../../assets/example-image.svg"
import Text from "./Text"
import TextField from '@material-ui/core/TextField';

import "./Content.scss"

function Net() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      <div className="net-content">
        <Text click={() => handleClick()}/>
          <img src={exampleimage} className="line1" alt="example1" />
          <img src={exampleimage} className="line1" alt="example2" />
          <img src={exampleimage} className="line1" alt="example3" />
          <img src={exampleimage} className="line2" alt="example4" />
          <img src={exampleimage} className="line2" alt="example5" />
          <img src={exampleimage} className="line2" alt="example6" />
          <img src={exampleimage} className="line3" alt="example7" />
          <img src={exampleimage} className="line3" alt="example8" />
          <img src={exampleimage} className="line3" alt="example9" />
      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Net
