import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Adipose extends Component {

    render() { const {onClick, fillColor} = this.props
        return (
          <Tooltip
            title="Adipose"
            placement="right">
              <g
                id="adipose"
                className="adipose"
                fill={fillColor} onClick={onClick}
                fillOpacity="0.5"
                transform="translate(10.5,20)">
                  <path id="path4314" d="M217.595,299.357c-10.021-1.201-20.553-6.685-29.754-15.487
                      c-3.354-3.208-5.486-5.575-6.782-7.525c-3.243-4.88-7.801-9.031-12.312-11.213l-1.313-0.632l0.104-0.953
                      c0.455-4.237,0.604-7.421,0.623-12.939c0.014-5.281,0.045-6.001,0.25-5.913c4.139,1.771,9.17,1.703,13.732-0.183
                      c1.735-0.716,2.063-0.935,3.825-2.586c8.925-8.339,18.208-13.396,27.695-15.086c3.991-0.711,9.129-0.808,12.943-0.245
                      c10.34,1.527,20.821,6.955,29.237,15.132c1.674,1.625,2.061,1.815,4.902,2.433c1.898,0.413,6.008,0.486,7.885,0.141
                      c1.398-0.258,3.666-0.931,4.813-1.429c0.449-0.198,0.875-0.31,0.937-0.248c0.166,0.166,0.318,6.242,0.334,13.238l0.021,6.157
                      l-0.854,0.39c-3.326,1.533-7.604,6.287-10.479,11.656c-1.203,2.242-6.396,8.141-10.313,11.728
                      c-8.832,8.083-17.146,12.345-26.496,13.57C224.354,299.659,220.088,299.656,217.595,299.357L217.595,299.357L217.595,299.357z
                      M226.963,254.106v-2.122h-1.717h-1.724v2.122v2.122h1.724h1.717V254.106z"/>
                  <path id="path4318" d="M158.839,427.368c0.008-0.199,0.521-7.242,1.146-15.651
                      c2.321-31.341,3-45.188,2.908-59.313c-0.062-9.521-0.926-21.589-2.023-28.363c-0.191-1.17-0.205-1.098-0.708,3.479
                      c-1.902,17.33-3.054,36.419-3.351,55.741c-0.117,7.615,0.936,34.877,1.549,40.375C158.615,425.888,158.83,427.567,158.839,427.368
                      L158.839,427.368z"/>
                  <path id="path9174" d="M282.783,428.652c-0.015-0.199-0.525-7.242-1.148-15.651
                      c-2.32-31.341-3-45.19-2.908-59.312c0.063-9.521,0.926-21.592,2.03-28.364c0.188-1.17,0.205-1.1,0.708,3.479
                      c1.902,17.329,3.047,36.418,3.344,55.741c0.117,7.615-0.929,34.877-1.549,40.375C283.006,427.171,282.792,428.85,282.783,428.652z"
                      />
              </g>
          </Tooltip>
        )
    }
}

export default Adipose