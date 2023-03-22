import React, {useRef} from "react"

// import doctors from "../../assets/doctors.svg"
import computer from "../../assets/HomeIMG.svg"
import Text from "./Text"
import TextField from '@material-ui/core/TextField';

import "./Content.scss"

function Content() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      <div className="home-content">
        <Text click={() => handleClick()}/>
        <img src={computer} className="doctors" alt="doctors" />
      </div>
      {/* <div ref={ref}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div> */}
    </div>
  )
}

export default Content
