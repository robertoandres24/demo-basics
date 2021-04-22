import React, { useState } from 'react'

function CustomInput({title, onChangeParent}) {

  const [text, setText] = useState("")


  const localOnChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
    onChangeParent(text)
  }


  return (
    <div>
      Hola soy un comp hijo {title}
      <input type="text" value={text} onChange={localOnChange}/>
    </div>
  )
}

export default CustomInput
