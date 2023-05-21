import React from 'react'

export default function Button(props) {
  let buttonText = props.buttonText
  let changeColor = props.changeColor
  console.log(props)
  return (
    <button onClick={changeColor}>
      {buttonText}
    </button>
  )
}