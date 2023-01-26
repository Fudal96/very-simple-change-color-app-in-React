import React from 'react'
import colorNames from 'colornames'

const AddColor = ({
    color, setColor, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
    <label></label>
    <input 
    type='text'
    autoFocus
    placeholder="Add color name"
    required
    value={color}
    onChange={(e) => {
        setColor(e.target.value);
        setHexValue(colorNames(e.target.value));
    }}
    />
    <button 
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
    >
        Toggle Text Color
    </button>

  </form>
  )
}

export default AddColor