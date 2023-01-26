import React from 'react'

const Square = ({color, hexValue, isDarkText}) => {
  return (
    <section 
        className="color-box"
        style={{
            backgroundColor: color,
            color: isDarkText ? '#000' : "#FFF"
        }}
        >
            <p>{color ? color : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>

  )
}

Square.defaultProps = {
    color: "Empty Color Value"
  }

export default Square