import React from 'react'

export default function Title(props) {
  let textMessage = props.text
  let textColor = props.color

  return (
    <h1 style={{ color: textColor }}>
      {textMessage}
    </h1>
  )

}